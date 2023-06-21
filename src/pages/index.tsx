import LazyImg from "@/components/RandomFox";
import { useState } from "react";
import type { MouseEventHandler } from "react";

type ImageItem = { id: string; url: string };

const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
	//vamos a tipar siempre el estado. Para que no sea implicito

	const [images, setImages] = useState<Array<ImageItem>>([]);

	const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
		const newImageItem: ImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${random()}.jpg`,
		};

		setImages([...images, newImageItem]);
		window.plausible("add_fox");
	};

	return (
		<main>
			<h1 className="text-3xl">Hello Foxes!</h1>
			<button onClick={addNewFox}>Add New Fox</button>
			{images.map(({ id, url }) => (
				<div
					className="p-4"
					key={id}>
					<LazyImg
						src={url}
						width={320}
						height="auto"
						className="rounded bg-gray-400"
						alt="Imagen random de un zorro"
						onClick={() => console.log("Imagen clickeada")}
						onLazyLoad={() => console.log("aparece imagen")}
					/>
				</div>
			))}
		</main>
	);
}

//en este codigo creamos un type ImageItems el cual usamos en useState para tipar cada uno de los items del array images
//luego en el map destructuramos id y url de cada uno de los items para usarlo en random fox, componente que acepta las props alt e image que estan
//tipadas en el mismo.

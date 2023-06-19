import RandomFox from "@/components/RandomFox";
import { useState } from "react";

type ImageItems = { id: string; url: string };

const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
	//vamos a tipar siempre el estado. Para que no sea implicito

	const [images, setImages] = useState<Array<ImageItems>>([
		{ id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
		{ id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
		{ id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
		{ id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
	]);
	return (
		<main>
			<h1 className="text-3xl">Hello</h1>
			{images.map(({ id, url }) => (
				<div
					className="p-4"
					key={id}>
					<RandomFox
						alt="Imagen random de un zorro"
						image={url}
					/>
				</div>
			))}
		</main>
	);
}

//en este codigo creamos un type ImageItems el cual usamos en useState para tipar cada uno de los items del array images
//luego en el map destructuramos id y url de cada uno de los items para usarlo en random fox, componente que acepta las props alt e image que estan
//tipadas en el mismo.

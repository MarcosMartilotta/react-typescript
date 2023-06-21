import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";

type LazyImageProps = { src: string; alt: string; onLazyLoad?: (img: HTMLImageElement) => void };
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & ImageNative;

const LazyImg = ({
	src,
	alt,
	onLazyLoad,
	...imageProps /* todo lo demas guardalo en un objeto en esta variable */
}: Props): JSX.Element => {
	const node = useRef<HTMLImageElement>(null); //por regla de oro hay que poner el elemento con el que vamos a trabajar e inicializarlo en null
	const [currentSrc, setCurrentSrc] = useState(
		"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
	);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setCurrentSrc(src);
				}
			});
		});
		// nuevo observer
		//cuando hay un ainterseccion --> console.log()
		//que observe nuestro nodo
		if (node.current) {
			observer.observe(node.current);
		}
		//desconectarnos del nodo una vez que haya un rerender
		return () => {
			observer.disconnect();
		};
	}, [src]);

	return (
		<div>
			<img
				src={currentSrc}
				ref={node}
				alt={alt}
				{...imageProps}
			/>
		</div>
	);
};

export default LazyImg;

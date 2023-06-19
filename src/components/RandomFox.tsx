type Props = { image: string; alt: string };

const RandomFox = ({ image, alt }: Props): JSX.Element => {
	return (
		<div>
			<img
				width={320}
				height="auto"
				src={image}
				className="rounded"
				alt={alt}
			/>
		</div>
	);
};

export default RandomFox;

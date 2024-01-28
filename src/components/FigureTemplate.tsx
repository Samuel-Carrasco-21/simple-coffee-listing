interface Props {
  image: string;
  width: number;
  height: number;
  rounded?: boolean;
  shadow?: boolean;
}

export const FigureTemplate = ({
  image,
  width,
  height,
  rounded,
  shadow,
}: Props) => {
  const STYLE_IMG: string = `${rounded && "rounded-lg"} ${
    shadow && "shadow-md"
  } ${width !== 0 ? `w-[${width}px]` : "w-full"} ${
    height !== 0 ? `h-[${height}px]` : "h-full"
  }`;
  return (
    <figure className={STYLE_IMG}>
      <img className={STYLE_IMG} src={image} />
    </figure>
  );
};

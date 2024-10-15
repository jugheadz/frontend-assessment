const Image = ({
  src,
  width = 400,
  height = 300,
}: {
  src: string;
  width?: number;
  height?: number;
}) => {
  return (
    <img
      className="border-b border-b-4 border-[crimson]"
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Image;

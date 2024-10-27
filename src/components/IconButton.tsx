interface IconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <img alt={alt} src={iconPath} />
    </button>
  );
}

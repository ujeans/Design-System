type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface PrimaryButtonProps {
  theme: PrimaryButtonTheme;
  isDisabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-primary";
const disabled = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  isDisabled,
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={`rounded-button-default w-full h-[59px] ${disabled} ${color[theme]}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

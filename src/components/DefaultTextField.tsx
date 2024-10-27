import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  errorMessage: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errorMessage,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-primary"
    : "border-mono300";
  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          flex
          items-center
          justify-between
         text-primary 
          border-b 
          ${borderColor}`}
      >
        <input
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

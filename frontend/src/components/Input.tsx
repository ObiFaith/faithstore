import type { InputProps } from "./type";

const Input = ({
  type,
  name,
  value,
  placeholder,
  className = "",
}: InputProps) => {
  return (
    <input
      className={`border placeholder:text-[#B2B2C2] rounded-md border-[#E4E4EE] ${className}`}
      required
      name={name}
      type={type}
      value={value}
      placeholder={placeholder || name}
    />
  );
};

export default Input;

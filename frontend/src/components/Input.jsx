import { useState } from "react";
import Icon from "./Icon";

const Input = ({ type = "text", placeholder, value, onChange, className = "", leftIcon, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  const controlled = value !== undefined;
  const currentValue = controlled ? value : internalValue;

  return (
    <div className={`input-wrapper ${className}`}>
      {leftIcon && <Icon name={leftIcon} size={20} />}
      <input
        type={inputType}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
          if (!controlled) setInternalValue(e.target.value);
          onChange?.(e);
        }}
        {...props}
      />
      {isPassword && currentValue.length > 0 && (
        <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => setShowPassword((prev) => !prev)}>
          <Icon name={showPassword ? "eye-off" : "eye"} size={20} />
        </button>
      )}
    </div>
  );
};

export default Input;

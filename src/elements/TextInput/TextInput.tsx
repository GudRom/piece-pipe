import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./TextInput.module.scss";
import classNames from "classnames";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  variant: "outlined" | "standard";
};

const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
  { value, onChange, variant, className, ...props },
  ref
) {
  const inputClass = classNames(className, styles.input, {
    [styles[`input_${variant}`]]: variant,
  });
  return (
    <input
      className={inputClass}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      ref={ref}
      {...props}
    />
  );
});

export default TextInput;

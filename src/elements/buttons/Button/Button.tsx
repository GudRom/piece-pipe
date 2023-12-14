import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode, FC, memo } from "react";
import styles from "./Button.module.scss";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  children: ReactNode;
  view: "contained" | "text";
};

const Button: FC<ButtonProps> = ({
  handleClick,
  children,
  className,
  view,
  ...props
}) => {
  const btnClass = classNames(className, styles.button, {
    [styles[`button_${view}`]]: view,
  });
  return (
    <button onClick={handleClick} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);

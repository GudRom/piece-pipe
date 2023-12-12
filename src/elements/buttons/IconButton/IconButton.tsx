import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  children: ReactNode;
};

const IconButton: FC<ButtonProps> = ({
  handleClick,
  className,
  children,
  ...props
}) => {
  const btnClass = classNames(className, styles.iconButton);
  return (
    <button onClick={handleClick} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default memo(IconButton);

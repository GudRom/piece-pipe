import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";
import Text from "elements/Text";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  children: ReactNode;
  text?: string;
};

const IconButton: FC<ButtonProps> = ({
  handleClick,
  className,
  children,
  text,
  ...props
}) => {
  const btnClass = classNames(className, styles.iconButton);
  return (
    <button onClick={handleClick} className={btnClass} {...props}>
      {children}
      {text ? (
        <Text view="p-8" tag="span" className={styles.iconButton__text}>
          {text}
        </Text>
      ) : null}
    </button>
  );
};

export default memo(IconButton);

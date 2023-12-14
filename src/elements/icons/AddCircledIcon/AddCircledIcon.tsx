import classNames from "classnames";
import { FC, SVGAttributes } from "react";
import styles from "./AddCircledIcon.module.scss";

export type IconProps = SVGAttributes<SVGElement> & {
  className?: string;
  color?: "primary" | "secondary" | "accent";
};

const AddCircledIcon: FC<IconProps> = ({
  className,
  color,
  width,
  height,
  ...props
}) => {
  const classIcon = classNames(
    styles.icon,
    {
      [styles[`icon_${color}`]]: color,
    },
    className
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "50"}
      height={height ?? "50"}
      viewBox="0 0 50 50"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM25 47C37.1503 47 47 37.1503 47 25C47 12.8497 37.1503 3 25 3C12.8497 3 3 12.8497 3 25C3 37.1503 12.8497 47 25 47Z"
        fill="#FBBC81"
      />
      <path
        d="M23.6 19C23.6 18.4477 24.0477 18 24.6 18H25.4C25.9523 18 26.4 18.4477 26.4 19V23.6H31C31.5523 23.6 32 24.0477 32 24.6V25.4C32 25.9523 31.5523 26.4 31 26.4H26.4V31C26.4 31.5523 25.9523 32 25.4 32H24.6C24.0477 32 23.6 31.5523 23.6 31V26.4H19C18.4477 26.4 18 25.9523 18 25.4V24.6C18 24.0477 18.4477 23.6 19 23.6H23.6V19Z"
        fill="#FBBC81"
      />
    </svg>
  );
};

export default AddCircledIcon;

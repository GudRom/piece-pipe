import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./CheckmarkIcon.module.scss";
import classNames from "classnames";

const CheckmarkIcon: FC<IconProps> = ({
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
      width={width ?? "18"}
      height={height ?? "15"}
      viewBox="0 0 18 15"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        d="M0.122678 10.2503C-0.206793 9.86916 0.163698 9.29348 0.647059 9.43548L2.6918 10.0662C2.89219 10.128 3.06807 10.2513 3.19457 10.4185L3.95608 11.4252C4.32161 11.9085 5.02947 11.9582 5.45897 11.5308L11.9412 5.08065L16.5729 1.03256C16.622 0.989639 16.6778 0.955085 16.7381 0.930278C17.3148 0.693109 17.8216 1.38985 17.4184 1.86543L11.048 9.37886C11.016 9.41656 10.9813 9.45183 10.9442 9.4844L5.31484 14.4151C4.93388 14.7488 4.36361 14.745 3.98712 14.4063L2.76471 13.3065L0.122678 10.2503Z"
        fill="#1C130E"
      />
    </svg>
  );
};

export default CheckmarkIcon;

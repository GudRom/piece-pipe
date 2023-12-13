import classNames from "classnames";
import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./MainCrossIcon.module.scss";

const MainCrossIcon: FC<IconProps> = ({
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
      width={width ?? "15"}
      height={height ?? "15"}
      viewBox="0 0 15 15"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        d="M0 0L7.5 5.83333L13.75 0H15L14.5833 1.25L9.16667 7.5L12.0833 10.8333L15 15L12.9167 13.75L7.5 9.16667L2.91667 13.75L0 15L2.91667 10.4167L5.83333 7.5L0.833333 2.08333L0 0Z"
        fill="#1C130E"
      />
    </svg>
  );
};

export default MainCrossIcon;

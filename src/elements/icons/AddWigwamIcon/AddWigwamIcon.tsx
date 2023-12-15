import classNames from "classnames";
import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./AddWigwamIcon.module.scss";

const AddWigwamIcon: FC<IconProps> = ({
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
      width={width ?? "30"}
      height={height ?? "30"}
      viewBox="0 0 30 30"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0488 4.2L11.122 0L10.2439 0.75L13.1707 5.1L0 30H30L14.9268 5.1L16.9756 0.45L16.0976 0L14.0488 4.2ZM27.439 28.5L14.0488 6L2.56098 28.5H27.439Z"
        fill="#F7F3E8"
      />
      <path
        d="M13.7561 16.8C13.7561 16.6343 13.8871 16.5 14.0488 16.5H14.9268C15.0885 16.5 15.2195 16.6343 15.2195 16.8V19.5H17.8537C18.0153 19.5 18.1463 19.6343 18.1463 19.8V20.7C18.1463 20.8657 18.0153 21 17.8537 21H15.2195V23.7C15.2195 23.8657 15.0885 24 14.9268 24H14.0488C13.8871 24 13.7561 23.8657 13.7561 23.7V21H11.122C10.9603 21 10.8293 20.8657 10.8293 20.7V19.8C10.8293 19.6343 10.9603 19.5 11.122 19.5H13.7561V16.8Z"
        fill="#F7F3E8"
      />
    </svg>
  );
};

export default AddWigwamIcon;

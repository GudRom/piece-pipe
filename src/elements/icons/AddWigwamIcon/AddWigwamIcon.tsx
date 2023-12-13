import classNames from "classnames";
import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./AddWigwamIcon.module.scss";

const AddVigvamIcon: FC<IconProps> = ({
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
      width={width ?? "38"}
      height={height ?? "38"}
      viewBox="0 0 38 38"
      fill="none"
      className={classIcon}
      {...props}
    >
      <g filter="url(#filter0_d_14_126)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0488 8.2L15.122 4L14.2439 4.75L17.1707 9.1L4 34H34L18.9268 9.1L20.9756 4.45L20.0976 4L18.0488 8.2ZM31.439 32.5L18.0488 10L6.56098 32.5H31.439Z"
          fill="#F7F3E8"
        />
        <path
          d="M17.7561 20.8C17.7561 20.6343 17.8871 20.5 18.0488 20.5H18.9268C19.0885 20.5 19.2195 20.6343 19.2195 20.8V23.5H21.8537C22.0153 23.5 22.1463 23.6343 22.1463 23.8V24.7C22.1463 24.8657 22.0153 25 21.8537 25H19.2195V27.7C19.2195 27.8657 19.0885 28 18.9268 28H18.0488C17.8871 28 17.7561 27.8657 17.7561 27.7V25H15.122C14.9603 25 14.8293 24.8657 14.8293 24.7V23.8C14.8293 23.6343 14.9603 23.5 15.122 23.5H17.7561V20.8Z"
          fill="#F7F3E8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_14_126"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.737255 0 0 0 0 0.505882 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_14_126"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14_126"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AddVigvamIcon;

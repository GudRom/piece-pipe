import classNames from "classnames";
import { FC, SVGAttributes } from "react";
import styles from "./AddCircledIcon.module.scss";

export type IconProps = SVGAttributes<SVGElement> & {
  className?: string;
  color?: "primary" | "secondary" | "accent";
};

const AddCircledIcon: FC<IconProps> = ({ className, color, width, height, ...props }) => {
  const classIcon = classNames(
    styles.addIcon,
    {
      [styles[`checkIcon_${color}`]]: color,
    },
    className
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "58"}
      height={height ?? "58"}
      viewBox="0 0 58 58"
      fill="none"
      className={classIcon}
      {...props}
    >
      <g filter="url(#filter0_d_15_1038)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 54C42.8071 54 54 42.8071 54 29C54 15.1929 42.8071 4 29 4C15.1929 4 4 15.1929 4 29C4 42.8071 15.1929 54 29 54ZM29 51C41.1503 51 51 41.1503 51 29C51 16.8497 41.1503 7 29 7C16.8497 7 7 16.8497 7 29C7 41.1503 16.8497 51 29 51Z"
          fill="#FBBC81"
        />
        <path
          d="M27.6 23C27.6 22.4477 28.0477 22 28.6 22H29.4C29.9523 22 30.4 22.4477 30.4 23V27.6H35C35.5523 27.6 36 28.0477 36 28.6V29.4C36 29.9523 35.5523 30.4 35 30.4H30.4V35C30.4 35.5523 29.9523 36 29.4 36H28.6C28.0477 36 27.6 35.5523 27.6 35V30.4H23C22.4477 30.4 22 29.9523 22 29.4V28.6C22 28.0477 22.4477 27.6 23 27.6H27.6V23Z"
          fill="#FBBC81"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15_1038"
          x="0"
          y="0"
          width="58"
          height="58"
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
            result="effect1_dropShadow_15_1038"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_1038"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AddCircledIcon;

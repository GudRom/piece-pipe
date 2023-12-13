import classNames from "classnames";
import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./CrossLikeBoneIcon.module.scss";

const CrossLikeBoneIcon: FC<IconProps> = ({
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
      width={width ?? "23"}
      height={height ?? "17"}
      viewBox="0 0 23 17"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        d="M0.947811 3.29797C0.0211604 2.81691 -0.279496 1.63585 0.304346 0.770274C0.903848 -0.118525 2.15502 -0.262753 2.94102 0.466333L6.05211 3.35214C6.17678 3.46778 6.31106 3.57262 6.4535 3.66551L17.7395 11.0259L21.2441 12.7526C22.173 13.2103 22.4845 14.3824 21.9055 15.2409C21.3103 16.1233 20.0619 16.2527 19.2984 15.5112L16.9477 13.2281C16.8092 13.0936 16.658 12.9728 16.4964 12.8674L5.23946 5.52592L0.947811 3.29797Z"
        fill="#FFE7CD"
      />
      <path
        d="M19.2408 0.575598C20.0326 -0.20273 21.3364 -0.0715432 21.9573 0.848915C22.5248 1.69023 22.2729 2.83519 21.4047 3.36063L8.73946 11.0259L3.01368 15.6636C2.17049 16.3465 0.923238 16.1602 0.316473 15.2606C-0.282735 14.3723 -0.00390619 13.1622 0.92364 12.6257L9.73946 7.52594L15.9506 3.70372C16.1426 3.58558 16.3206 3.44618 16.4814 3.28815L19.2408 0.575598Z"
        fill="#FFE7CD"
      />
    </svg>
  );
};

export default CrossLikeBoneIcon;

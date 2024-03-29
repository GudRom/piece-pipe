import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./BurgerIcon.module.scss";
import classNames from "classnames";

const BurgerIcon: FC<IconProps> = ({
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
      width={width ?? "24"}
      height={height ?? "19"}
      viewBox="0 0 24 19"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        d="M0 3.16938C0 2.50133 0.497456 1.93782 1.16035 1.85496L11.7519 0.531009C11.9167 0.510416 12.0833 0.510416 12.2481 0.531009L22.8121 1.85152C23.4907 1.93634 24 2.51322 24 3.19711C24 3.98892 23.3244 4.61231 22.5352 4.54881L9.70252 3.51629C9.56785 3.50546 9.43243 3.5083 9.29834 3.52477L1.48612 4.48416C0.69642 4.58114 0 3.96501 0 3.16938ZM0 10.004C0 9.23545 0.562533 8.58261 1.32269 8.46902L14.1272 6.55571C14.3736 6.51889 14.6246 6.52843 14.8675 6.58382L22.8009 8.39319C23.5024 8.55318 24 9.17705 24 9.89655C24 10.7059 23.3742 11.3776 22.5668 11.4347L7.7253 12.4841C7.57557 12.4947 7.42514 12.4884 7.27682 12.4653L1.3135 11.5377C0.557519 11.4201 0 10.7691 0 10.004ZM0 16.6728C0 15.9176 0.582624 15.2902 1.33583 15.2344L17.7061 14.0218C17.901 14.0073 18.0969 14.0215 18.2877 14.0639L22.7876 15.0639C23.496 15.2213 24 15.8497 24 16.5753C24 17.3806 23.3827 18.0514 22.5803 18.1183L12.1661 18.9862C12.0556 18.9954 11.9444 18.9954 11.8339 18.9862L1.3226 18.1102C0.575022 18.0479 0 17.423 0 16.6728Z"
        fill="#FFE7CD"
      />
    </svg>
  );
};

export default BurgerIcon;

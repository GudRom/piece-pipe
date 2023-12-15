import classNames from "classnames";
import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";
import styles from "./SearchIcon.module.scss";

const SearchIcon: FC<IconProps> = ({
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
      width={width ?? "34"}
      height={height ?? "40"}
      viewBox="0 0 34 40"
      fill="none"
      className={classIcon}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 40L34 20L1.7161e-06 0L0 40ZM2.83333 35L28.3333 20L2.83334 4.99998L2.83333 35Z"
        fill="#F7F3E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.40329 23.2606C11.5922 23.2606 13.3666 21.4656 13.3666 19.2513C13.3666 17.0371 11.5922 15.2421 9.40329 15.2421C7.21442 15.2421 5.44 17.0371 5.44 19.2513C5.44 21.4656 7.21442 23.2606 9.40329 23.2606ZM9.40329 22.4588C11.1544 22.4588 12.5739 21.0228 12.5739 19.2513C12.5739 17.4799 11.1544 16.0439 9.40329 16.0439C7.6522 16.0439 6.23266 17.4799 6.23266 19.2513C6.23266 21.0228 7.6522 22.4588 9.40329 22.4588Z"
        fill="#F7F3E8"
      />
      <path
        d="M12.4946 21.1758L16.32 24.423L15.6067 25.2829L11.7813 22.0358L12.4946 21.1758Z"
        fill="#F7F3E8"
      />
      <path
        d="M9.95814 16.926C10.2356 16.6189 10.6516 16.8236 10.9093 17.0062C11.1611 17.1845 11.5585 17.4699 11.3453 17.808C11.2185 18.0091 11.1466 17.9679 11.0282 17.8481C10.8301 17.6476 10.8301 17.6476 10.5526 17.5274C10.2621 17.4014 9.99237 17.3961 9.87888 17.1665C9.83925 17.0863 9.805 17.0955 9.95814 16.926Z"
        fill="#F7F3E8"
      />
    </svg>
  );
};

export default SearchIcon;

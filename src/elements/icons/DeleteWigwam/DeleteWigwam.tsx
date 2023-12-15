import { IconProps } from "elements/icons/AddCircledIcon";
import { FC } from "react";

const DeleteWigwam: FC<IconProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "30"}
      height={height ?? "30"}
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0488 4.2L11.122 0L10.2439 0.75L13.1707 5.1L0 30H30L14.9268 5.1L16.9756 0.45L16.0976 0L14.0488 4.2ZM27.439 28.5L14.0488 6L2.56098 28.5H27.439Z"
        fill="#F7F3E8"
      />
      <path
        d="M7 14L14.5 19.8333L20.75 14H22L21.5833 15.25L16.1667 21.5L19.0833 24.8333L22 29L19.9167 27.75L14.5 23.1667L9.91667 27.75L7 29L9.91667 24.4167L12.8333 21.5L7.83333 16.0833L7 14Z"
        fill="#C73D31"
      />
    </svg>
  );
};

export default DeleteWigwam;

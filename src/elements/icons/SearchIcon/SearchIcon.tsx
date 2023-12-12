import { FC } from "react";

interface Props {}

const SearchIcon: FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="37"
      viewBox="0 0 33 37"
      fill="none"
    >
      <g filter="url(#filter0_d_15_433)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 32.8675L29 18.4337L4 4L4 32.8675ZM6.08333 29.2591L24.8333 18.4337L6.08334 7.60842L6.08333 29.2591Z"
          fill="#F7F3E8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9142 20.7869C12.5236 20.7869 13.8284 19.4915 13.8284 17.8935C13.8284 16.2954 12.5236 15 10.9142 15C9.30472 15 8 16.2954 8 17.8935C8 19.4915 9.30472 20.7869 10.9142 20.7869ZM10.9142 20.2082C12.2018 20.2082 13.2455 19.1719 13.2455 17.8935C13.2455 16.615 12.2018 15.5787 10.9142 15.5787C9.62661 15.5787 8.58284 16.615 8.58284 17.8935C8.58284 19.1719 9.62661 20.2082 10.9142 20.2082Z"
          fill="#F7F3E8"
        />
        <path
          d="M13.1872 19.2823L16 21.6258L15.4755 22.2464L12.6627 19.9029L13.1872 19.2823Z"
          fill="#F7F3E8"
        />
        <path
          d="M11.3222 16.2153C11.5262 15.9936 11.8321 16.1414 12.0216 16.2731C12.2067 16.4018 12.4989 16.6078 12.3421 16.8518C12.2489 16.9969 12.196 16.9672 12.109 16.8807C11.9633 16.7361 11.9633 16.7361 11.7593 16.6493C11.5457 16.5584 11.3473 16.5546 11.2639 16.3889C11.2347 16.331 11.2096 16.3376 11.3222 16.2153Z"
          fill="#F7F3E8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15_433"
          x="0"
          y="0"
          width="33"
          height="36.8675"
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
            result="effect1_dropShadow_15_433"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_433"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SearchIcon;

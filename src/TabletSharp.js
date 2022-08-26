import * as React from "react";

const SvgTabletSharp = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2H4v20h16V2H5Zm1 5V4h3v1h6V4h3v16H6V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTabletSharp;

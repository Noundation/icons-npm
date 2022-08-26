import * as React from "react";

const SvgSmartphoneSharp = ({ title, titleId, ...props }) => (
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
      d="M6 2H5v20h14V2H6Zm4 2H7v16h10V4h-3v1h-4V4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSmartphoneSharp;

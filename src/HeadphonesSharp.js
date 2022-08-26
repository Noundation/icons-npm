import * as React from "react";

const SvgHeadphonesSharp = ({ title, titleId, ...props }) => (
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
      d="M8 3h8v1h1v1h1v1h1v1h1v1h1v13h-6v-7h4V9h-1V8h-1V7h-1V6h-1V5H9v1H8v1H7v1H6v1H5v5h4v7H3V8h1V7h1V6h1V5h1V4h1V3Zm10 16h-1v-3h2v3h-1ZM5 16v3h2v-3H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHeadphonesSharp;

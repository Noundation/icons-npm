import * as React from "react";

const SvgDropletSharp = ({ title, titleId, ...props }) => (
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
      d="M11 4h2v1h1v1h1v1h1v1h1v1h1v2h1v6h-1v1h-1v1h-1v1h-2v1h-4v-1H8v-1H7v-1H6v-1H5v-6h1V9h1V8h1V7h1V6h1V5h1V4ZM9 9v1H8v2H7v4h1v1h1v1h2v1h2v-1h2v-1h1v-1h1v-4h-1v-2h-1V9h-1V8h-1V7h-2v1h-1v1H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDropletSharp;

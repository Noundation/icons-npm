import * as React from "react";

const SvgMapPinSharp = ({ title, titleId, ...props }) => (
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
      d="M15 3h1v1h2v2h1v6h-1v2h-1v2h-1v2h-1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2H8v-2H7v-2H6v-2H5V6h1V4h2V3h2V2h4v1h1Zm1 3h-2V5h-4v1H8v2H7v3h1v2h1v2h1v2h1v2h2v-2h1v-2h1v-2h1v-2h1V8h-1V6Zm-4 1h-2v1H9v4h1v1h4v-1h1V8h-1V7h-2Zm-1 4V9h2v2h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMapPinSharp;

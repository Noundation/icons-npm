import * as React from "react";

const SvgAwardSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2H9v1H8v1H7v1H6v1H5v6h1v1h1v1h1v2H7v2H6v4h2v-1h2v-1h4v1h2v1h2v-4h-1v-2h-1v-2h1v-1h1v-1h1V6h-1V5h-1V4h-1V3h-1V2h-4Zm2 14h1v1h1v2h-1v-1h-4v1H9v-2h1v-1h3Zm4-5V7h-1V6h-1V5h-1V4h-4v1H9v1H8v1H7v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAwardSharp;

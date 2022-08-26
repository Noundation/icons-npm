import * as React from "react";

const SvgCommandSharp = ({ title, titleId, ...props }) => (
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
      d="M7 3H5v1H4v1H3v4h1v1h4v4H4v1H3v4h1v1h1v1h4v-1h1v-4h4v4h1v1h4v-1h1v-1h1v-4h-1v-1h-4v-4h4V9h1V5h-1V4h-1V3h-4v1h-1v4h-4V4H9V3H7Zm0 16H6v-1H5v-2h3v3H7Zm12-3v2h-1v1h-2v-3h3Zm0-10v2h-3V5h2v1h1Zm-5 7v1h-4v-4h4v3ZM8 5v3H5V6h1V5h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCommandSharp;

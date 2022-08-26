import * as React from "react";

const SvgMicOffSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h2v1h2v2h1v6h-1v-1h-1V5h-1V4h-2v1H9V3h2V2Zm0 12h1v1h1v1h-2v-1H9v-2H8v-2h1v1h1v1h1v1Zm-7-3h2v2h1v2h1v1h2v1h5v1h-1v1h-4v-1H8v-1H6v-2H5v-2H4v-2Zm14 0h2v2h-1v1h-1v-3Zm-8 9H9v2h6v-2h-5ZM4 3h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9V9H8V8H7V7H6V6H5V5H4V3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMicOffSharp;

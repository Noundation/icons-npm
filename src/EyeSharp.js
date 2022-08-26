import * as React from "react";

const SvgEyeSharp = ({ title, titleId, ...props }) => (
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
      d="M13 4h1v1h3v1h1v1h1v1h1v1h1v1h1v4h-1v1h-1v1h-1v1h-1v1h-1v1h-3v1h-4v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-4h1V9h1V8h1V7h1V6h1V5h3V4h3Zm1 14v-1h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-2V6h-4v1H8v1H7v1H6v1H5v1H4v2h1v1h1v1h1v1h1v1h2v1h4Zm-1-9h1v1h1v4h-1v1h-4v-1H9v-4h1V9h3Zm-1 2h-1v2h2v-2h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEyeSharp;

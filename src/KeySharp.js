import * as React from "react";

const SvgKeySharp = ({ title, titleId, ...props }) => (
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
      d="M18 4h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v1h-1v1h-1v1h-1v1h1v4h-1v1h-1v1h-1v1H6v-1H5v-1H4v-1H3v-4h1v-1h1v-1h1v-1h4v1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4ZM7 19h2v-1h1v-1h1v-2h-1v-1H9v-1H7v1H6v1H5v2h1v1h1v1Zm12-9h-1V9h-1V8h1V7h1v1h1v1h-1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgKeySharp;

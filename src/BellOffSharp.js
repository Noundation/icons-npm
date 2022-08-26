import * as React from "react";

const SvgBellOffSharp = ({ title, titleId, ...props }) => (
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
      d="M11 3h3v1h2v1h1v2h1v4h1v3h-2v-2h-1V8h-1V6h-2V5h-2v1H9V4h1V3h1Zm0 12h1v1h1v1H4v-3h1v-3h2v4h4Zm4 4h-2v1h-2v-1H9v2h2v1h2v-1h2v-2ZM4 3H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8H9V7H8V6H7V5H6V4H5V3H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBellOffSharp;

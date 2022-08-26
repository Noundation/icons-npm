import * as React from "react";

const SvgSunSharp = ({ title, titleId, ...props }) => (
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
      d="M13 2h-2v3h2V2Zm6 2h-1v1h-1v2h2V6h1V4h-1ZM3 11H2v2h3v-2H3Zm17 0h-1v2h3v-2h-2ZM6 19v1H4v-2h1v-1h2v2H6Zm5 3v-3h2v3h-2ZM4 4h2v1h1v2H5V6H4V4Zm16 15v-1h-1v-1h-2v2h1v1h2v-1ZM9 14v-4h1V9h4v1h1v4h-1v1h-4v-1H9Zm0 2v1h6v-1h1v-1h1V9h-1V8h-1V7H9v1H8v1H7v6h1v1h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSunSharp;

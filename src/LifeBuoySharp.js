import * as React from "react";

const SvgLifeBuoySharp = ({ title, titleId, ...props }) => (
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
      d="M15 4v1h1v2h-1v1h-1v1h-1V8h-2v1h-1V8H9V7H8V5h1V4h6Zm0-2h1v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h7Zm-4 18H9v-1H8v-2h1v-1h1v-1h1v1h2v-1h1v1h1v1h1v2h-1v1h-4Zm9-11h-1V8h-2v1h-1v1h-1v1h1v2h-1v1h1v1h1v1h2v-1h1V9Zm-7 4h1v-2h-1v-1h-2v1h-1v2h1v1h2v-1Zm-4-3H8V9H7V8H5v1H4v6h1v1h2v-1h1v-1h1v-1H8v-2h1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLifeBuoySharp;

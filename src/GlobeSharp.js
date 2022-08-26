import * as React from "react";

const SvgGlobeSharp = ({ title, titleId, ...props }) => (
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
      d="M15 4v1h1v1h1v1h1v1h1v1h1v2h-4V9h-1V7h-1V5h-1V4h2Zm0-2h1v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h7Zm-4 18H9v-1H8v-1H7v-1H6v-1H5v-1H4v-2h4v2h1v2h1v2h1v1Zm4 0v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-4v2h-1v2h-1v2h-1v1h2ZM10 4h1v1h-1v2H9v2H8v2H4V9h1V8h1V7h1V6h1V5h1V4h1Zm4 5v2h-4V9h1V7h2v2h1Zm-3 8h2v-2h1v-2h-4v2h1v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGlobeSharp;

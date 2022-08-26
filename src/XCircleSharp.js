import * as React from "react";

const SvgXCircleSharp = ({ title, titleId, ...props }) => (
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
      d="M15 4v1h1v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1H5v-1H4V9h1V8h1V7h1V6h1V5h1V4h6Zm1 18H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1Zm0-7v-1h-1v-1h-1v-2h1v-1h1V8h-2v1h-1v1h-2V9h-1V8H8v2h1v1h1v2H9v1H8v2h2v-1h1v-1h2v1h1v1h2v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgXCircleSharp;

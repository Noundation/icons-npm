import * as React from "react";

const SvgTargetSharp = ({ title, titleId, ...props }) => (
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
      d="M15 4v1h1v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1H5v-1H4V9h1V8h1V7h1V6h1V5h1V4h6Zm1 18H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1ZM6 15h1v1h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-1h1v-1h1v-4h-1V9h-1V8h-1V7h-1V6h-1V5h-4v1H9v1H8v1H7v1H6v1H5v4h1v1Zm7 1v1h-2v-1h-1v-1H9v-1H8v-1H7v-2h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1Zm-1-7h-1v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1v-1h-1V9h-1Zm-1 3v1h2v-2h-2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTargetSharp;

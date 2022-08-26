import * as React from "react";

const SvgPenSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v3h1v5h1v4h1v2h4v1h1v1h1v1h1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-3h-1v-1h-1v-1h-1v-1h-1V6h-2V5h-4V4H6V3H4Zm15 11v1h-1v1h-1v1h-1v1h-1v1h-1v-2h1v-1h1v-1h1v-1h2Zm-8 2h-1v-1H7v-4H6V8h1v1h1v4h1v1h4v-1h1V9h-1V8H9V7H8V6h3v1h4v3h1v3h-1v1h-1v1h-1v1h-2Zm1-4h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPenSharp;

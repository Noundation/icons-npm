import * as React from "react";

const SvgFrownSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2H8v1H7v1H6v1H5v1H4v1H3v1H2v8h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-5Zm0 2H9v1H8v1H7v1H6v1H5v1H4v6h1v1h1v1h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-1h1v-1h1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-4ZM9 15H8v2h2v-1h4v1h2v-2h-2v-1h-4v1H9Zm1-4v1H8v-2h2v1Zm6 1v-2h-2v2h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFrownSharp;

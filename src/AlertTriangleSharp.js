import * as React from "react";

const SvgAlertTriangleSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h2v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2H2v-2h1v-2h1v-2h1v-2h1v-2h1V9h1V7h1V5h1V3h1V2Zm7 17h1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1V8h-1V6h-2v2h-1v2H9v2H8v2H7v2H6v2H5v1h13Zm-7-3h2v2h-2v-2Zm0-4v2h2v-4h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertTriangleSharp;

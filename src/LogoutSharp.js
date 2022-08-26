import * as React from "react";

const SvgLogoutSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h9v2H5v14h7v2H3V3Zm6 8H8v2h7v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-2v2h1v1h1v1H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLogoutSharp;

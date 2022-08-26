import * as React from "react";

const SvgFilterSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h18v3h-1v1h-1v1h-1v1h-1v1h-1v2h-1v9h-2v-1h-1v-1h-1v-1h-1v-1H9v-5H8v-2H7V9H6V8H5V7H4V5H3V3Zm12 5v1h-1v2h-1v6h-1v-1h-1v-5h-1V9H9V8H8V7H7V6H6V5h12v1h-1v1h-1v1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilterSharp;

import * as React from "react";

const SvgScanSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v7h2V5h5V3H4ZM3 14h2v5h5v2H3v-7Zm12 5h-1v2h7v-7h-2v5h-4Zm4-11v2h2V3h-7v2h5v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScanSharp;

import * as React from "react";

const SvgLayoutSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm1 4v2h14V5H5v2Zm0 4v8h4v-8H5Zm7 8h-1v-8h8v8h-7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLayoutSharp;

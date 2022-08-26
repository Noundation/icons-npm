import * as React from "react";

const SvgGridSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v8h8V3H4Zm1 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4Zm-2 8h8v8h-8v-8Zm5 2h-3v4h4v-4h-1Zm-9-2h2v8H3v-8h6Zm0 4v-2H5v4h4v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGridSharp;

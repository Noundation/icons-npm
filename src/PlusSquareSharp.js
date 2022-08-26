import * as React from "react";

const SvgPlusSquareSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm6 16H5V5h14v14h-9Zm-1-8H8v2h3v3h2v-3h3v-2h-3V8h-2v3H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlusSquareSharp;

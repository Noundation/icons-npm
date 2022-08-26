import * as React from "react";

const SvgMinusSquareSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h18v18H3V3Zm3 16h13V5H5v14h1Zm3-8h7v2H8v-2h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinusSquareSharp;

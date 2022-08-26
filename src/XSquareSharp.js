import * as React from "react";

const SvgXSquareSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm14 2h1v14H5V5h13Zm-2 10v-1h-1v-1h-1v-2h1v-1h1V8h-2v1h-1v1h-2V9h-1V8H8v2h1v1h1v2H9v1H8v2h2v-1h1v-1h2v1h1v1h2v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgXSquareSharp;

import * as React from "react";

const SvgTerminalSharp = ({ title, titleId, ...props }) => (
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
      d="M4 6V5h2v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1H9v1H8v1H7v1H6v1H4v-2h1v-1h1v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8H5V7H4V6Zm13 15h-5v-2h8v2h-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTerminalSharp;

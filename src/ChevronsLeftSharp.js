import * as React from "react";

const SvgChevronsLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M10 7h1v2h-1v1H9v1H8v2h1v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1H5v-2h1v-1h1V9h1V8h1V7h1Zm3 3h1V9h1V8h1V7h2v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-2h1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronsLeftSharp;

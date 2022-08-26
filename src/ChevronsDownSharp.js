import * as React from "react";

const SvgChevronsDownSharp = ({ title, titleId, ...props }) => (
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
      d="M9 6H7v2h1v1h1v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V6h-2v1h-1v1h-1v1h-2V8h-1V7H9V6Zm0 7H7v2h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-2v1h-1v1h-1v1h-2v-1h-1v-1H9v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronsDownSharp;

import * as React from "react";

const SvgChevronsUpSharp = ({ title, titleId, ...props }) => (
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
      d="M12 5h-1v1h-1v1H9v1H8v1H7v2h2v-1h1V9h1V8h2v1h1v1h1v1h2V9h-1V8h-1V7h-1V6h-1V5h-1Zm0 10h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronsUpSharp;

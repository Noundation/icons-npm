import * as React from "react";

const SvgRewindSharp = ({ title, titleId, ...props }) => (
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
      d="M11 5h1v6h1v-1h1V9h1V8h1V7h1V6h1V5h2v14h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v6h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1Zm6 9v1h1V9h-1v1h-1v1h-1v2h1v1h1Zm-8 1h1V9H9v1H8v1H7v2h1v1h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRewindSharp;

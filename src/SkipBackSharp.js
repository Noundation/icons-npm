import * as React from "react";

const SvgSkipBackSharp = ({ title, titleId, ...props }) => (
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
      d="M5 5H4v14h2V5H5Zm14 14h-1v-1h-1v-1h-2v-1h-2v-1h-2v-1H9v-1H8v-2h1v-1h2V9h2V8h2V7h2V6h1V5h2v14h-1Zm-6-6v1h2v1h2v1h1V8h-1v1h-2v1h-2v1h-2v2h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSkipBackSharp;

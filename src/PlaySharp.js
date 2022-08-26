import * as React from "react";

const SvgPlaySharp = ({ title, titleId, ...props }) => (
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
      d="M6 4v1h2v1h2v1h2v1h2v1h2v1h2v1h2v2h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4V4h2Zm2 3H6v10h2v-1h2v-1h2v-1h2v-1h2v-2h-2v-1h-2V9h-2V8H8V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlaySharp;

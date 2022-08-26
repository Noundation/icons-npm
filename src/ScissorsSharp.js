import * as React from "react";

const SvgScissorsSharp = ({ title, titleId, ...props }) => (
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
      d="M5 2h2v1h2v2h1v2H9v1h1v1h1v1h2V9h1V8h1V7h1V6h1V5h1V4h1V3h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1v2H9v2H7v1H5v-1H3v-2H2v-2h1v-2h2v-1h2v1h1v-1h1v-1h1v-2H9v-1H8V9H7v1H5V9H3V7H2V5h1V3h2V2Zm1 2H5v1H4v2h1v1h2V7h1V5H7V4H6ZM5 16v1H4v2h1v1h2v-1h1v-2H7v-1H5Zm10-2h-1v2h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScissorsSharp;

import * as React from "react";

const SvgStarSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h2v2h1v2h1v2h4v1h3v2h-1v1h-1v1h-1v1h-1v5h1v3h-2v-1h-1v-1h-2v-1h-4v1H8v1H7v1H5v-3h1v-5H5v-1H4v-1H3v-1H2V9h3V8h4V6h1V4h1V2Zm3 7V8h-1V6h-2v2h-1v2H6v2h1v1h2v2H8v3h1v-1h2v-1h2v1h2v1h1v-3h-1v-2h2v-1h1v-2h-4V9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStarSharp;

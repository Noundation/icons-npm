import * as React from "react";

const SvgTrendingDownSharp = ({ title, titleId, ...props }) => (
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
      d="M4 6H3v2h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h2v1h1v1h1v1h1v1h1v1h-4v2h8v-8h-2v4h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-2v1h-1v1H8V9H7V8H6V7H5V6H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrendingDownSharp;

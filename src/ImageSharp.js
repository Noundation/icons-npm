import * as React from "react";

const SvgImageSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm15 2v8h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H5V5h14Zm-2 9h-2v1h-1v1h-1v1h-1v1h-1v1h8v-3h-1v-1h-1v-1Zm-7-4V8H8v2h2Zm2 1h-1v1H7v-1H6V7h1V6h4v1h1v4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgImageSharp;

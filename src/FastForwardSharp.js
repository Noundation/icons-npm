import * as React from "react";

const SvgFastForwardSharp = ({ title, titleId, ...props }) => (
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
      d="M4 5H3v14h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1H9V9H8V8H7V7H6V6H5V5H4Zm3 9H6v1H5V9h1v1h1v1h1v2H7v1Zm11-5h-1V8h-1V7h-1V6h-1V5h-2v14h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9Zm-2 5h-1v1h-1V9h1v1h1v1h1v2h-1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFastForwardSharp;

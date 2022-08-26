import * as React from "react";

const SvgXSharp = ({ title, titleId, ...props }) => (
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
      d="M7 6H6v2h1v1h1v1h1v1h1v2H9v1H8v1H7v1H6v2h2v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-2h1v-1h1V9h1V8h1V6h-2v1h-1v1h-1v1h-1v1h-2V9h-1V8H9V7H8V6H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgXSharp;

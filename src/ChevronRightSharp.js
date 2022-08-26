import * as React from "react";

const SvgChevronRightSharp = ({ title, titleId, ...props }) => (
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
      d="M9 6H8v2h1v1h1v1h1v1h1v2h-1v1h-1v1H9v1H8v2h2v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-1V6H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronRightSharp;

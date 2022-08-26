import * as React from "react";

const SvgChevronDownSharp = ({ title, titleId, ...props }) => (
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
      d="M7 8H5v2h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8h-2v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8V9H7V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronDownSharp;

import * as React from "react";

const SvgArrowLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M13 5h-2v1h-1v1H9v1H8v1H7v1H6v1H5v2h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1H9v-1h10v-2H9v-1h1V9h1V8h1V7h1V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowLeftSharp;

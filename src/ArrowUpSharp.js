import * as React from "react";

const SvgArrowUpSharp = ({ title, titleId, ...props }) => (
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
      d="M11 5h2v1h1v1h1v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1V9h-1v10h-2V9h-1v1H9v1H8v1H7v1H5v-2h1v-1h1V9h1V8h1V7h1V6h1V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowUpSharp;

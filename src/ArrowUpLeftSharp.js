import * as React from "react";

const SvgArrowUpLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M9 7H7v10h2v-6h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h6V7H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowUpLeftSharp;

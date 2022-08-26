import * as React from "react";

const SvgArrowUpRightSharp = ({ title, titleId, ...props }) => (
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
      d="M15 7h2v10h-2v-6h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9H7V7h8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowUpRightSharp;

import * as React from "react";

const SvgArrowDownLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M16 7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9V7H7v10h10v-2h-6v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V7h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDownLeftSharp;

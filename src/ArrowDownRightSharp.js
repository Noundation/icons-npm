import * as React from "react";

const SvgArrowDownRightSharp = ({ title, titleId, ...props }) => (
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
      d="M7 7h2v1h1v1h1v1h1v1h1v1h1v1h1V7h2v10H7v-2h6v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDownRightSharp;

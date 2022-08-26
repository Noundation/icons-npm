import * as React from "react";

const SvgVideoSharp = ({ title, titleId, ...props }) => (
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
      d="M17 5H2v14h15v-3h1v1h1v1h3V6h-3v1h-1v1h-1V5Zm-3 2h1v10H4V7h10Zm4 7h1v1h1V9h-1v1h-1v1h-1v2h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideoSharp;

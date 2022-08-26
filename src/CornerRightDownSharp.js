import * as React from "react";

const SvgCornerRightDownSharp = ({ title, titleId, ...props }) => (
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
      d="M11 3h2v1h1v1h1v1h1v11h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-2h2v1h1v1h1V7h-1V6h-1V5H3V3h8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerRightDownSharp;

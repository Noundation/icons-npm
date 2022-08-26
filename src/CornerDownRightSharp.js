import * as React from "react";

const SvgCornerDownRightSharp = ({ title, titleId, ...props }) => (
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
      d="M5 3H3v10h1v1h1v1h1v1h11v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-2v2h1v1h1v1H7v-1H6v-1H5V3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerDownRightSharp;

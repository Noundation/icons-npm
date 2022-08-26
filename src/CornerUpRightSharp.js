import * as React from "react";

const SvgCornerUpRightSharp = ({ title, titleId, ...props }) => (
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
      d="M15 4v2h1v1h1v1H6v1H5v1H4v1H3v10h2v-9h1v-1h1v-1h10v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerUpRightSharp;

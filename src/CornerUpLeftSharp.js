import * as React from "react";

const SvgCornerUpLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M9 4v2H8v1H7v1h11v1h1v1h1v1h1v10h-2v-9h-1v-1h-1v-1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1H3V8h1V7h1V6h1V5h1V4h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerUpLeftSharp;

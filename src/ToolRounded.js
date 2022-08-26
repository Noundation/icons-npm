import * as React from "react";

const SvgToolRounded = ({ title, titleId, ...props }) => (
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
      d="M16 3h-4v1h-1v1h-1v1H9v1H8v5H7v1H6v1H5v1H4v1H3v4h1v1h4v-1h1v-1h1v-1h1v-1h1v-1h5v-1h1v-1h1v-1h1v-1h1V8h-1V7h-3V4h-1V3Zm0 5V7h1v1h-1Zm-1 1V8h1v1h-1Zm0 0v1h-1V9h1Zm0-4v1h-1v1h-1v1h-1v2h1v1h1v1h2v-1h1v-1h1V9h1v2h-1v1h-1v1h-1v1h-5v1h-1v1H9v1H8v1H7v1H5v-2h1v-1h1v-1h1v-1h1v-1h1V8h1V7h1V6h1V5h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgToolRounded;

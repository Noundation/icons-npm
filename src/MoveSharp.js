import * as React from "react";

const SvgMoveSharp = ({ title, titleId, ...props }) => (
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
      d="M13 4V3h-2v1h-1v1H9v2h2v4H7V9H5v1H4v1H3v2h1v1h1v1h2v-2h4v4H9v2h1v1h1v1h2v-1h1v-1h1v-2h-2v-4h4v2h2v-1h1v-1h1v-2h-1v-1h-1V9h-2v2h-4V7h2V5h-1V4h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoveSharp;

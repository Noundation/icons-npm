import * as React from "react";

const SvgRefreshSharp = ({ title, titleId, ...props }) => (
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
      d="M15 3H7v1H6v1H5v1H4v1H3v3h2V8h1V7h1V6h1V5h6v1h1v1h1v1h1v1h-3v2h7V4h-2v3h-1V6h-1V5h-1V4h-1V3ZM4 13H3v7h2v-3h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-3h-2v2h-1v1h-1v1h-1v1h-6v-1H9v-1H8v-1H7v-1h3v-2H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRefreshSharp;

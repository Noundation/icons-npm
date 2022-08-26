import * as React from "react";

const SvgRssSharp = ({ title, titleId, ...props }) => (
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
      d="M10 6h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v7h2v-8h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3H3v2h7v1Zm0 8h1v1h1v1h1v5h2v-6h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9V9H3v2h5v1h1v1h1v1Zm-4 3H5v2h2v-1H6v-1Zm3 1v3H3v-6h4v1h1v1h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRssSharp;

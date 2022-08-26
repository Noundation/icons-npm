import * as React from "react";

const SvgTrendingUpSharp = ({ title, titleId, ...props }) => (
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
      d="M21 6h-8v2h4v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H8v1H7v1H6v1H5v1H4v1H3v2h2v-1h1v-1h1v-1h1v-1h2v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v4h2V6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrendingUpSharp;

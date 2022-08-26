import * as React from "react";

const SvgCornerDownLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M19 3h2v10h-1v1h-1v1h-1v1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1H3v-2h1v-1h1v-1h1v-1h1v-1h2v2H8v1H7v1h10v-1h1v-1h1V3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerDownLeftSharp;

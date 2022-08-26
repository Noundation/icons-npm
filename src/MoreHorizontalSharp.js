import * as React from "react";

const SvgMoreHorizontalSharp = ({ title, titleId, ...props }) => (
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
      d="M6 10H5v1H4v2h1v1h2v-1h1v-2H7v-1H6Zm5 0v1h-1v2h1v1h2v-1h1v-2h-1v-1h-2Zm6 1v-1h2v1h1v2h-1v1h-2v-1h-1v-2h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoreHorizontalSharp;

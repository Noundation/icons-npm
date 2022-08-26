import * as React from "react";

const SvgBookmarkSharp = ({ title, titleId, ...props }) => (
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
      d="M5 2H4v19h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-1h1V2H5Zm1 17V4h12v15h-1v-1h-1v-1h-1v-1h-1v-1h-4v1H9v1H8v1H7v1H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBookmarkSharp;

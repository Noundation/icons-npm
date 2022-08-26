import * as React from "react";

const SvgMinimizeSharp = ({ title, titleId, ...props }) => (
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
      d="M18 4h2v2h-1v1h-1v1h-1v1h-1v1h3v2h-7V5h2v3h1V7h1V6h1V5h1V4Zm-6 8v7h-2v-3H9v1H8v1H7v1H6v1H4v-2h1v-1h1v-1h1v-1h1v-1H5v-2h7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinimizeSharp;

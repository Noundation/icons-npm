import * as React from "react";

const SvgFlagSharp = ({ title, titleId, ...props }) => (
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
      d="M10 2h1v1h2v1h2V3h2V2h3v12h-2v1h-2v1h-4v-1h-2v-1H8v1H7v1H6v5H4V4h2V3h1V2h3ZM9 4H8v1H7v1H6v7h1v-1h4v1h2v1h2v-1h2v-1h1V5h-2v1h-4V5h-2V4H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlagSharp;

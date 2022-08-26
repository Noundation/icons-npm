import * as React from "react";

const SvgPhoneSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h7v2h1v4h-1v2h1v1h1v1h1v1h2v-1h4v1h2v7h-6v-1h-2v-1h-2v-1H9v-1H8v-1H7v-1H6v-2H5v-2H4V9H3V3Zm2 5v1h1v2h1v2h1v1h1v1h1v1h1v1h2v1h2v1h4v-4h-3v1h-4v-1h-1v-1h-1v-1H9v-1H8V9h1V5H5v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPhoneSharp;

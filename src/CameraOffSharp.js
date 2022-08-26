import * as React from "react";

const SvgCameraOffSharp = ({ title, titleId, ...props }) => (
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
      d="M5 4H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9H9V8H8V7H7V6H6V5H5V4Zm7 1H9v1h1v1h4v1h1v1h5v8h1v1h1V7h-6V6h-1V5h-3ZM2 10V7h1v1h1v10h10v1h1v1H2V10Zm10 6h-1v-1h-1v-1H9v-1H8v1h1v2h2v1h1v-1Zm1-6h2v2h-1v-1h-1v-1Zm0 0h-1V9h1v1Zm2 2h1v1h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCameraOffSharp;

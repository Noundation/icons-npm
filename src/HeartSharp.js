import * as React from "react";

const SvgHeartSharp = ({ title, titleId, ...props }) => (
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
      d="M6 4h4v1h1v1h2V5h1V4h5v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V6h1V5h1V4h1Zm7 12v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5V7h1V6h3v1h1v1h1v1h2V8h1V7h1V6h3v1h1v4h-1v1h-1v1h-1v1h-1v1h-1v1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHeartSharp;

import * as React from "react";

const SvgEyeOffSharp = ({ title, titleId, ...props }) => (
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
      d="M5 3H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8H9V7H8V6H7V5H6V4H5V3Zm8 1h1v1h3v1h1v1h1v1h1v1h1v1h1v4h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-2V6H9V5h1V4h3Zm0 5h1v1h-1V9Zm1 1h1v1h-1v-1ZM3 10H2v4h1v1h1v1h1v1h1v1h1v1h3v1h4v-1h1v-1h-5v-1H8v-1H7v-1H6v-1H5v-1H4v-2h1v-1h1V9H5V8H4v1H3v1Zm7 3H9v1h1v1h1v-1h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEyeOffSharp;

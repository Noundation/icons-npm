import * as React from "react";

const SvgWifiOffSharp = ({ title, titleId, ...props }) => (
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
      d="M5 4h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V8H6V7H5V6H4V4h1Zm9 1H9v1h1v1h4v1h2v1h2v1h2v1h2V9h-1V8h-2V7h-2V6h-2V5h-1ZM2 9h1V8h2v1h1v1H4v1H2V9Zm7 3H8v-1H6v1H5v2h2v-1h2v-1Zm0 3v-1h2v2h-1v1H8v-2h1Zm4 3h-2v2h2v-2Zm1-8h2v1h2v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1Zm0 0h-1V9h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWifiOffSharp;

import * as React from "react";

const SvgPhoneOffSharp = ({ title, titleId, ...props }) => (
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
      d="M19 3h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3ZM3 3h7v2h1v4h-1v2H9v1H8V9h1V5H5v4h1v2h1v3H6v-1H5v-2H4V9H3V3Zm8 14h2v1h2v1h4v-4h-3v1h-4v-1h1v-1h2v-1h4v1h2v7h-6v-1h-2v-1h-2v-1h-1v-1h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPhoneOffSharp;

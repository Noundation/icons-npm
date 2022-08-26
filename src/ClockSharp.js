import * as React from "react";

const SvgClockSharp = ({ title, titleId, ...props }) => (
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
      d="M15 5V4H9v1H8v1H7v1H6v1H5v1H4v6h1v1h1v1h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-1h1v-1h1V9h-1V8h-1V7h-1V6h-1V5h-1Zm0 17h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2H8v1H7v1H6v1H5v1H4v1H3v1H2v8h1v1h1v1h1v1h1v1h1v1h1v1h7Zm-3-10h-1V7h2v4h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClockSharp;

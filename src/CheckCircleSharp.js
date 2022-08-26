import * as React from "react";

const SvgCheckCircleSharp = ({ title, titleId, ...props }) => (
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
      d="M15 5V4H9v1H8v1H7v1H6v1H5v1H4v6h1v1h1v1h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-1h1v-1h1v-5h1V9h1v7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h8v1h1v2h-2Zm6 2V6h1V4h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H7v2h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckCircleSharp;

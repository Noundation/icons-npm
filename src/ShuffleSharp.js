import * as React from "react";

const SvgShuffleSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h2v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1H9v-1H8V9H7V8H6V7H5V6H4V5H3V3Zm12 11h1v1h1v1h1v1h1v-3h2v7h-7v-2h3v-1h-1v-1h-1v-1h-1v-2h1Zm1-4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h-3V3h7v7h-2V7h-1v1h-1v1h-1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShuffleSharp;

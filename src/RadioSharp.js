import * as React from "react";

const SvgRadioSharp = ({ title, titleId, ...props }) => (
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
      d="M7 6V5H5v1H4v1H3v1H2v8h1v1h1v1h1v1h2v-2H6v-1H5v-1H4V9h1V8h1V7h1V6Zm12 4h-1V9h-1V8h-2v2h1v1h1v2h-1v1h-1v2h2v-1h1v-1h1v-4Zm2 6h1V8h-1V7h-1V6h-1V5h-2v2h1v1h1v1h1v6h-1v1h-1v1h-1v2h2v-1h1v-1h1v-1ZM6 14H5v-4h1V9h1V8h2v2H8v1H7v2h1v1h1v2H7v-1H6v-1Zm5-3h2v2h-2v-2Zm-1-1v1H9v2h1v2h4v-2h1v-2h-1V9h-4v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRadioSharp;

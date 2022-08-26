import * as React from "react";

const SvgTagSharp = ({ title, titleId, ...props }) => (
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
      d="M3 3h10v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V3Zm9 15h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5V5h7v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1ZM10 8H8v2h2V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTagSharp;

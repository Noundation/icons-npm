import * as React from "react";

const SvgMoonSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h2v2h-1v2h-1v4h1v1h1v1h1v1h4v-1h2v-1h2v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h3Zm0 18H9v-1H8v-1H7v-1H6v-1H5v-1H4V9h1V8h1V7h1V6h1V5h1V4h1v2H9v5h1v1h1v1h1v1h1v1h5v-1h2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoonSharp;

import * as React from "react";

const SvgRotateSharp = ({ title, titleId, ...props }) => (
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
      d="M15 2h1v1h1v1h1v1h1v1h1V3h2v7h-7V8h3V7h-1V6h-1V5h-1V4H9v1H8v1H7v1H6v1H5v1H4v6h1v1h1v1h1v1h1v1h1v1h6v-1h1v-1h1v-1h1v-1h1v-1h1v-3h2v4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V8h1V7h1V6h1V5h1V4h1V3h1V2h7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRotateSharp;

import * as React from "react";

const SvgLinkSharp = ({ title, titleId, ...props }) => (
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
      d="M18 3h-4v1h-1v2h2V5h2v1h1v1h1v3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-2v2h1v1h1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V6h-1V5h-1V4h-1V3Zm-8 17v1H6v-1H5v-1H4v-1H3v-5h1v-1h1v-1h1v-1h1V9h1V8h1V7h3v1h1v1h1v2h-2v-1h-1V9h-1v1H9v1H8v1H7v1H6v1H5v3h1v1h1v1h2v-1h2v2h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLinkSharp;

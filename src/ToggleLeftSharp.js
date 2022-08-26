import * as React from "react";

const SvgToggleLeftSharp = ({ title, titleId, ...props }) => (
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
      d="M6 6H5v1H4v1H3v1H2v6h1v1h1v1h1v1h14v-1h1v-1h1v-1h1V9h-1V8h-1V7h-1V6H6Zm13 4h1v4h-1v1h-1v1H6v-1H5v-1H4v-4h1V9h1V8h12v1h1v1Zm-9 0H9V9H7v1H6v1H5v2h1v1h1v1h2v-1h1v-1h1v-2h-1v-1Zm-1 2v1H7v-2h2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgToggleLeftSharp;

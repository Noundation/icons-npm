import * as React from "react";

const SvgToggleRightSharp = ({ title, titleId, ...props }) => (
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
      d="M5 6h14v1h1v1h1v1h1v6h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2V9h1V8h1V7h1V6Zm0 4V9h1V8h12v1h1v1h1v4h-1v1h-1v1H6v-1H5v-1H4v-4h1Zm9 0h1V9h2v1h1v1h1v2h-1v1h-1v1h-2v-1h-1v-1h-1v-2h1v-1Zm1 1v2h2v-2h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgToggleRightSharp;

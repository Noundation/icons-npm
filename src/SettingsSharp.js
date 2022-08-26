import * as React from "react";

const SvgSettingsSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h2v1h1v1h1v1h1V4h2v1h1v1h1v2h-1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h1v2h-1v1h-1v1h-2v-1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v1H6v-1H5v-1H4v-2h1v-1H4v-1H3v-1H2v-2h1v-1h1V9h1V8H4V6h1V5h1V4h2v1h1V4h1V3h1V2ZM7 17v-3H6v-1H5v-2h1v-1h1V7h3V6h1V5h2v1h1v1h3v3h1v1h1v2h-1v1h-1v3h-3v1h-1v1h-2v-1h-1v-1H7Zm5-8h-2v1H9v4h1v1h4v-1h1v-4h-1V9h-2Zm-1 4h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsSharp;

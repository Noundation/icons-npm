import * as React from "react";

const SvgFigmaSharp = ({ title, titleId, ...props }) => (
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
      d="M9 2H7v1H6v1H5v4h1v2H5v4h1v2H5v4h1v1h1v1h4v-1h1v-1h1v-5h1v1h3v-1h1v-1h1v-4h-1V8h1V4h-1V3h-1V2H9ZM8 17v-1h3v3h-1v1H8v-1H7v-2h1Zm7-7h1v1h1v2h-1v1h-2v-1h-1v-3h2Zm-6 4H8v-1H7v-2h1v-1h3v4H9ZM8 8V7H7V5h1V4h3v4H8Zm8 0h-3V4h3v1h1v2h-1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFigmaSharp;

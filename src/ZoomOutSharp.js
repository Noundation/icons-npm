import * as React from "react";

const SvgZoomOutSharp = ({ title, titleId, ...props }) => (
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
      d="M8 3h5v1h1v1h1v1h1v1h1v6h-1v2h1v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1H7v-1H6v-1H5v-1H4v-1H3V7h1V6h1V5h1V4h1V3h1Zm7 9V8h-1V7h-1V6h-1V5H8v1H7v1H6v1H5v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1ZM9 9h4v2H7V9h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgZoomOutSharp;

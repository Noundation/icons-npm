import * as React from "react";

const SvgEditSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3h7v2H5v14h14v-6h2v8H3V3h1Zm4 13v-5h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h2v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8Zm2-2v-2h1v-1h1v-1h1V9h1V8h1V7h1V6h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEditSharp;

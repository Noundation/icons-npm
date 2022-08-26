import * as React from "react";

const SvgTvSharp = ({ title, titleId, ...props }) => (
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
      d="M7 3h1v1h1v1h1v1h1v1h2V6h1V5h1V4h1V3h2v2h-1v1h-1v1h-1v1h6v12H3V8h6V7H8V6H7V5H6V3h1Zm-2 7h14v8H5v-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTvSharp;

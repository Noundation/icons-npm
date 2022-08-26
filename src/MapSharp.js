import * as React from "react";

const SvgMapSharp = ({ title, titleId, ...props }) => (
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
      d="M10 3H7v1H5v1H3v16h2v-1h2v-1h1v-1h2v1h1v1h2v1h3v-1h1v-1h1v-1h3V3h-3v1h-1v1h-1v1h-2V5h-1V4h-2V3h-1Zm8 4V6h1v9h-1v1h-1v1h-1V8h1V7h1Zm-6 0h1v1h1v10h-1v-1h-2v-1h-1V6h1v1h1ZM6 17H5V7h2V6h1v10H7v1H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMapSharp;

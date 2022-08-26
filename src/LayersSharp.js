import * as React from "react";

const SvgLayersSharp = ({ title, titleId, ...props }) => (
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
      d="M13 5h-2v1H9v1H7v2h2v1h2v1h2v-1h2V9h2V7h-2V6h-2V5Zm8 2h-1V6h-2V5h-2V4h-2V3h-4v1H8v1H6v1H4v1H3v2h1v1h2v1h2v1h2v1h4v-1h2v-1h2v-1h2V9h1V7Zm-8 8h-2v-1H9v-1H7v-1H5v-1H3v2h1v1h2v1h2v1h2v1h4v-1h2v-1h2v-1h2v-1h1v-2h-2v1h-2v1h-2v1h-2v1Zm0 4h-2v-1H9v-1H7v-1H5v-1H3v2h1v1h2v1h2v1h2v1h4v-1h2v-1h2v-1h2v-1h1v-2h-2v1h-2v1h-2v1h-2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLayersSharp;

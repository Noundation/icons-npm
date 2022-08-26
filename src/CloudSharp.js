import * as React from "react";

const SvgCloudSharp = ({ title, titleId, ...props }) => (
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
      d="M7 4h5v1h2v1h1v2h1v1h3v1h1v1h1v1h1v5h-1v1h-1v1h-1v1H7v-1H5v-1H4v-1H3v-2H2V9h1V7h1V6h1V5h2V4Zm2 2H8v1H6v1H5v2H4v4h1v2h1v1h2v1h10v-1h1v-1h1v-3h-1v-1h-1v-1h-4V9h-1V7h-2V6H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudSharp;

import * as React from "react";

const SvgDownloadSharp = ({ title, titleId, ...props }) => (
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
      d="M12 4h1v8h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-2h2v1h1v1h1V4h1ZM5 16H3v5h18v-5h-2v3H5v-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownloadSharp;

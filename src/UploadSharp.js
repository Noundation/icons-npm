import * as React from "react";

const SvgUploadSharp = ({ title, titleId, ...props }) => (
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
      d="M8 4H7v1H5v1H4v1H3v2H2v6h1v2h1v1h2v-2H5v-2H4v-4h1V8h1V7h2V6h3v1h2v2h1v2h4v1h1v1h1v3h-1v1h-1v2h2v-1h1v-1h1v-5h-1v-1h-1v-1h-1V9h-3V8h-1V6h-1V5h-2V4H8Zm3 11v5h2v-5h1v1h2v-2h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v2h2v-1h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUploadSharp;

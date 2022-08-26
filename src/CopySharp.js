import * as React from "react";

const SvgCopySharp = ({ title, titleId, ...props }) => (
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
      d="M14 3h2v3h-2V5H5v9h1v2H3V3h11Zm-4 5h11v13H8V8h2Zm0 11v-9h9v9h-9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCopySharp;

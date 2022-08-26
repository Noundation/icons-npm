import * as React from "react";

const SvgFolderSharp = ({ title, titleId, ...props }) => (
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
      d="M2 4h8v1h1v1h1v1h10v13H2V4Zm8 4h1v1h9v9H4V6h5v1h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolderSharp;

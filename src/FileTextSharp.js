import * as React from "react";

const SvgFileTextSharp = ({ title, titleId, ...props }) => (
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
      d="M4 2h9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v13H4V2Zm11 9h3v9H6V4h5v7h4Zm-2-2V6h1v1h1v1h1v1h-3ZM7 8h3v2H7V8Zm0 4h10v2H7v-2Zm0 4h10v2H7v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFileTextSharp;

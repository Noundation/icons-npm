import * as React from "react";

const SvgClipboardSharp = ({ title, titleId, ...props }) => (
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
      d="M9 2H8v2H4v18h16V4h-4V2H9ZM6 9V6h2v2h8V6h2v14H6V9Zm4-5v2h4V4h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClipboardSharp;

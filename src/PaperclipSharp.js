import * as React from "react";

const SvgPaperclipSharp = ({ title, titleId, ...props }) => (
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
      d="M6 2H5v20h14V6h-2v14H7V4h6v12h-2V6H9v12h6V2H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPaperclipSharp;

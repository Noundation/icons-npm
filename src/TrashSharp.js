import * as React from "react";

const SvgTrashSharp = ({ title, titleId, ...props }) => (
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
      d="M8 2H7v4H3v2h2v14h14V8h2V6h-4V2H8Zm7 2v2H9V4h6Zm-5 4H7v12h10V8h-7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrashSharp;

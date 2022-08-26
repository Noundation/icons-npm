import * as React from "react";

const SvgPauseSharp = ({ title, titleId, ...props }) => (
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
      d="M6 3H5v18h6V3H6Zm1 2v14h2V5H7Zm6-2h6v18h-6V3Zm2 2v14h2V5h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPauseSharp;

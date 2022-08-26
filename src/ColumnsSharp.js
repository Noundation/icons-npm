import * as React from "react";

const SvgColumnsSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm1 4v12h6V5H5v2Zm9 12h-1V5h6v14h-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgColumnsSharp;

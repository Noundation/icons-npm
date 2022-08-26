import * as React from "react";

const SvgSaveSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V7h-1V6h-1V5h-1V4h-1V3H4Zm15 5h-1V7h-1V6h-1V5H5v14h2v-4h10v4h2V8Zm-4 10v1H9v-2h6v1ZM7 8h10v6H7V8Zm2 2v2h6v-2H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSaveSharp;

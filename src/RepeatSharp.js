import * as React from "react";

const SvgRepeatSharp = ({ title, titleId, ...props }) => (
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
      d="M16 3V2h2v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-2V8h1V7H7v1H6v1H5v3H3V8h1V7h1V6h1V5h11V4h-1V3ZM7 20v-1h11v-1h1v-1h1v-1h1v-4h-2v3h-1v1h-1v1H7v-1h1v-2H6v1H5v1H4v1H3v2h1v1h1v1h1v1h2v-2H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRepeatSharp;

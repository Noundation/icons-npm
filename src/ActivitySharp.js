import * as React from "react";

const SvgActivitySharp = ({ title, titleId, ...props }) => (
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
      d="M9 2H8v1H7v2H6v2H5v2H4v2H2v2h3v-1h1v-2h1V8h1V6h1v2h1v3h1v3h1v3h1v2h1v2h1v1h1v-1h1v-2h1v-2h1v-2h1v-2h2v-2h-3v1h-1v2h-1v2h-1v2h-1v-2h-1v-3h-1v-3h-1V7h-1V5h-1V3H9V2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgActivitySharp;

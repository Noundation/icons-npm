import * as React from "react";

const SvgVideoOffSharp = ({ title, titleId, ...props }) => (
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
      d="M4 4H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9H9V8H8V7H7V6H6V5H5V4H4Zm13 1H8v1h1v1h6v6h1v1h1v1h1v1h1v1h1v1h2V6h-3v1h-1v1h-1V5Zm1 9h1v1h1V9h-1v1h-1v1h-1v2h1v1Zm-6 3h1v1h1v1H2V7h1v1h1v9h8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideoOffSharp;

import * as React from "react";

const SvgMaximizeSharp = ({ title, titleId, ...props }) => (
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
      d="M20 3h1v7h-2V7h-1v1h-1v1h-1v1h-1v1h-2V9h1V8h1V7h1V6h1V5h-3V3h6ZM10 13H9v1H8v1H7v1H6v1H5v-3H3v7h7v-2H7v-1h1v-1h1v-1h1v-1h1v-2h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMaximizeSharp;

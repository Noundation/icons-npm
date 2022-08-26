import * as React from "react";

const SvgTwitterSharp = ({ title, titleId, ...props }) => (
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
      d="M14 4h-1v1h-1v1h-1v3H9V8H7V7H6V6H3v7h1v1h1v1h1v1h1v1H6v1H5v2h11v-1h1v-1h1v-1h1v-5h1v-1h1V8h-2V6h-1V5h-1V4h-3Zm-9 7v1h1v1h1v1h1v1h1v2H8v1h7v-1h1v-1h1v-5h1v-1h1V9h-2V7h-1V6h-2v1h-1v4H8v-1H6V9H5v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTwitterSharp;

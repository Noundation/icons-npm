import * as React from "react";

const SvgThumbsUpSharp = ({ title, titleId, ...props }) => (
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
      d="M10 4H9v3H8v2H7v2H3v10h17v-1h1v-1h1v-8h-1v-1h-1V9h-4V4h-2V3h-4v1Zm10 13v-5h-1v-1h-5V6h-1V5h-2v3h-1v2H9v9h10v-1h1v-1ZM6 13h1v6H5v-6h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbsUpSharp;

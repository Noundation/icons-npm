import * as React from "react";

const SvgCropSharp = ({ title, titleId, ...props }) => (
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
      d="M8 3H7v4H3v2h4v8h8v4h2v-4h4v-2h-4V7H9V3H8Zm1 10v2h6V9H9v4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCropSharp;

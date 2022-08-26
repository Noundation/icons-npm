import * as React from "react";

const SvgSkipForwardSharp = ({ title, titleId, ...props }) => (
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
      d="M18 5h2v14h-2V5ZM5 19h1v-1h1v-1h2v-1h2v-1h2v-1h2v-1h1v-2h-1v-1h-2V9h-2V8H9V7H7V6H6V5H4v14h1Zm8-7v1h-2v1H9v1H7v1H6V8h1v1h2v1h2v1h2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSkipForwardSharp;

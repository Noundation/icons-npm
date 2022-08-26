import * as React from "react";

const SvgSkipBackRounded = ({ title, titleId, ...props }) => (
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
      d="M5 5h-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H5Zm14 14h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H19Zm-6.5-6a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSkipBackRounded;

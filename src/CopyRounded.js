import * as React from "react";

const SvgCopyRounded = ({ title, titleId, ...props }) => (
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
      d="M14 3h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5H14Zm-4 5h10.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5H10Zm.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCopyRounded;

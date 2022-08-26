import * as React from "react";

const SvgGnarsNogglesRounded = ({ title, titleId, ...props }) => (
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
      d="M8 10.5a.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9h-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5H9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9h-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5H16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGnarsNogglesRounded;

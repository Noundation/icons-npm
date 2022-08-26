import * as React from "react";

const SvgNounsLoadingRounded = ({ title, titleId, ...props }) => (
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
      d="M5 7h-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1 .5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H5Zm0 8.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm13 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-3 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM8 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsLoadingRounded;

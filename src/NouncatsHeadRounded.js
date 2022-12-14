import * as React from "react";

const SvgNouncatsHeadRounded = ({ title, titleId, ...props }) => (
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
      d="M5 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5ZM18 14h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNouncatsHeadRounded;

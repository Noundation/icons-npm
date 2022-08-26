import * as React from "react";

const SvgNounPunksMohawkRounded = ({ title, titleId, ...props }) => (
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
      d="M13 5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V6h-.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h.5v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0v-6ZM8 13h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H8Zm2.5 4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5Zm6.5-.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounPunksMohawkRounded;

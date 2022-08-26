import * as React from "react";

const SvgTheBoneysSkullRounded = ({ title, titleId, ...props }) => (
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
      d="M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0 .5.5 0 0 1-1 0v-1a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5Zm14 2a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1ZM12.5 11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4ZM4 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-16a.5.5 0 0 1-.5-.5v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTheBoneysSkullRounded;
import * as React from "react";

const SvgShareRounded = ({ title, titleId, ...props }) => (
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
      d="M12.5 3a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-1 0v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1ZM5 13v5.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShareRounded;

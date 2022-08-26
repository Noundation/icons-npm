import * as React from "react";

const SvgThumbsUpRounded = ({ title, titleId, ...props }) => (
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
      d="M10 3.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM20 17v-4.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5V17ZM6 13h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbsUpRounded;

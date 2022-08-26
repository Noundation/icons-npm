import * as React from "react";

const SvgVideoRounded = ({ title, titleId, ...props }) => (
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
      d="M17 5.5a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-1 0v-2ZM14 7h.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5H14Zm4 6.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideoRounded;

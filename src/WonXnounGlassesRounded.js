import * as React from "react";

const SvgWonXnounGlassesRounded = ({ title, titleId, ...props }) => (
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
      d="M9 9H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H9Zm-1 2.5a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2Zm9.5 1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWonXnounGlassesRounded;

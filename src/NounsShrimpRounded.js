import * as React from "react";

const SvgNounsShrimpRounded = ({ title, titleId, ...props }) => (
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
      d="M9 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsShrimpRounded;

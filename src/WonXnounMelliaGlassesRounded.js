import * as React from "react";

const SvgWonXnounMelliaGlassesRounded = ({ title, titleId, ...props }) => (
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
      d="M18 8h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5H18Zm0 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-4 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWonXnounMelliaGlassesRounded;

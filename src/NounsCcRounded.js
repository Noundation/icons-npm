import * as React from "react";

const SvgNounsCcRounded = ({ title, titleId, ...props }) => (
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
      d="M6 5h-.5a.5.5 0 0 0-.5.5V7H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H5v1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V17h1.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H19V5.5a.5.5 0 0 0-.5-.5H6Zm13 2v10H5V7h14ZM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5Zm9 3.5h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsCcRounded;

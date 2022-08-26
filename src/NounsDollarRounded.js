import * as React from "react";

const SvgNounsDollarRounded = ({ title, titleId, ...props }) => (
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
      d="M11 6h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H11ZM13 12h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsDollarRounded;

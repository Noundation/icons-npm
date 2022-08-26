import * as React from "react";

const SvgNounsTxtDoomRounded = ({ title, titleId, ...props }) => (
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
      d="M8 4.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H4v1.5a.5.5 0 0 0 .5.5H8v1.5a.5.5 0 0 0 .5.5H12v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-3Zm4 9.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H12Zm-4-2v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8Zm-4-2V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsTxtDoomRounded;

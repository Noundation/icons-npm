import * as React from "react";

const SvgPlayDotted = ({ title, titleId, ...props }) => (
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
      d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0 0-1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0Zm.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm-.5.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8.5 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm2 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm2 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM15 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-3 1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlayDotted;

import * as React from "react";

const SvgTagDotted = ({ title, titleId, ...props }) => (
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
      d="M3 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1 1a.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5Zm.5.5a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM6 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1.5.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 1a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm5-3a.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1Zm0 1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTagDotted;

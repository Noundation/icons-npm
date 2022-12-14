import * as React from "react";

const SvgBellDotted = ({ title, titleId, ...props }) => (
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
      d="M11 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0Zm-.5.5a.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm-.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm4 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM15.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-1 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM8 15.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm9.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5 2.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-12 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.5-2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1-4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM14 19.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0Zm-1.5.5a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-2.5-.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm4 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBellDotted;

import * as React from "react";

const SvgRepeatDotted = ({ title, titleId, ...props }) => (
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
      d="M17 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 1 0-1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5Zm0 1a.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 1 1 .5.5.5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0Zm0 0a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm.5 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1 3a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-11-2a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5ZM4 9.5a.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5Zm0 0a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5ZM5.5 17a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm.5-.5a.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 1 1-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0Zm.5-.5a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0 0-1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1Zm-.5-.5a.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.5-.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm1 3a.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm10-1a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm1-1a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm1.5-1.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm0-1a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm0 0a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-14 6a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0Zm0 0a.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5Zm1 1a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRepeatDotted;
import * as React from "react";

const SvgCameraDotted = ({ title, titleId, ...props }) => (
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
      d="M11.5 5a.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm1.5.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM16 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 3a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5Zm0 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-.5 3.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm3.5.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm.5-3.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm.5 1.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5ZM12 15.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5ZM9.5 13a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCameraDotted;

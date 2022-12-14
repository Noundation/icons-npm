import * as React from "react";

const SvgDropletDotted = ({ title, titleId, ...props }) => (
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
      d="M11 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1 1a.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0 0-1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5Zm.5.5a.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5Zm-.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1.5.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-1 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-2 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-2-1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM8.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM8 9.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm1-1a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm1-1a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDropletDotted;

import * as React from "react";

const SvgThermometerDotted = ({ title, titleId, ...props }) => (
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
      d="M10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5Zm1 0a.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM13.5 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1 9a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm1 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm.5-3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1.5-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThermometerDotted;

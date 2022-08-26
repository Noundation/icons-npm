import * as React from "react";

const SvgRadioDotted = ({ title, titleId, ...props }) => (
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
      d="M6 5.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm-1 1a.5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 1 1 .5.5.5.5 0 1 1-.5.5.5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-.5.5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5ZM3 9.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 0a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm1 1a.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5Zm1 1a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm1 1a.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5Zm12-5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm-.5-.5a.5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 1 1-.5.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1Zm0-1a.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5Zm-.5-.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm-1-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm1.5 1.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm-1 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm.5.5a.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-.5.5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm4.5.5a.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5Zm0 0a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-.5.5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm2.5-3.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0-1a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm-1-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-1-1a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm-1-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-12 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-.5a.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5Zm-.5-.5a.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5Zm0-1a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm0 0a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm.5-1.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm1-1a.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5ZM7 13.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm1 1a.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5Zm3.5-3.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-1-1a.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 1 1 .5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1Zm.5-.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM9.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm1.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRadioDotted;

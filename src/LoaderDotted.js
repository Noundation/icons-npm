import * as React from "react";

const SvgLoaderDotted = ({ title, titleId, ...props }) => (
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
      d="M12 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5.5a.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 0a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm6-1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1 1a.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5Zm.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-14 3a.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm1 1a.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm14-1a.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm1 1a.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-13 7a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm.5-.5a.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 1 1-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-.5-.5a.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5Zm1-1a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm5 5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm0-1a.5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 1 1-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5Zm0-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 1 0 0 1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5Zm-.5.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm-5-10a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM8.5 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 7.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM7.5 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6 6.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5Zm-1-1a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5ZM18.5 19a.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5Zm-.5-.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-1-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-1-1a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm2.5 2.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLoaderDotted;

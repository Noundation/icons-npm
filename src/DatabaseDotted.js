import * as React from "react";

const SvgDatabaseDotted = ({ title, titleId, ...props }) => (
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
      d="M12 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm-.5.5a.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0Zm-.5-.5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm0 0a.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5Zm-1 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5ZM7 4.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm-1 1a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 1 1-.5.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0Zm-.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5.5a.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 0 1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 0 1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5Zm.5 6.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm3 1a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm1 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm1 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm1 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm0 0a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm3-1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm0 0a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm.5-6.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm-12 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm3 1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm8 12a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-3 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm-4 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM7.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 4.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5ZM14.5 3a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm0 0a.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDatabaseDotted;

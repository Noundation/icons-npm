import * as React from "react";

const SvgColumnsDotted = ({ title, titleId, ...props }) => (
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
      d="M3.5 3a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm.5.5a.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0Zm0 0a.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5Zm7 14a.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5Zm.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 10a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgColumnsDotted;

import * as React from "react";

const SvgArrowDownLeftDotted = ({ title, titleId, ...props }) => (
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
      d="M15.5 7a.5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 1 0-.5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5Zm.5.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5ZM15.5 9a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5Zm-1 1a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm-1 1a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5ZM10 14.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm-.5-.5a.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5Zm-.5.5a.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 1 1-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 1 1-.5-.5.5.5 0 0 1-.5-.5Zm-.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDownLeftDotted;
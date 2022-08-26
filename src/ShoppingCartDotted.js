import * as React from "react";

const SvgShoppingCartDotted = ({ title, titleId, ...props }) => (
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
      d="M3.5 4a.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 0 0 0 1 .5.5 0 0 0 0 1 .5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 0 0 1 0 .5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 0 0-1 .5.5 0 1 0-.5-.5.5.5 0 0 0-.5-.5.5.5 0 1 0-.5-.5.5.5 0 0 0-1 0 .5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm1 1a.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm0 0a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 .5.5.5.5 0 0 1 .5-.5ZM7 6.5a.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5Zm0 0a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5ZM8.5 8a.5.5 0 0 1-.5-.5.5.5 0 0 1-.5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 0 1 .5.5 0 0 1 0 1 .5.5 0 0 1 .5.5.5.5 0 1 1 .5.5.5.5 0 0 1 .5.5.5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 1 1 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-1 0 .5.5 0 0 1-.5.5Zm.5.5a.5.5 0 1 0-.5.5.5.5 0 1 0 0 1 .5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5Zm1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM11 8.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm6.5 3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM16 13.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM9.5 12a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm.5 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-.5.5a.5.5 0 0 0 0-1 .5.5 0 0 0 .5-.5.5.5 0 1 0 1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5.5.5 0 0 0-.5.5.5.5 0 1 0-.5.5.5.5 0 1 0 .5.5.5.5 0 0 0 .5.5.5.5 0 1 0 .5.5.5.5 0 1 0 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 0 .5-.5.5.5 0 1 0 0-1 .5.5 0 0 0 0 1 .5.5 0 0 0-.5.5.5.5 0 0 0-1 0 .5.5 0 0 0-.5-.5Zm.5.5a.5.5 0 0 0 .5.5.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5Zm-.5-.5a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm8 0a.5.5 0 0 0-.5.5.5.5 0 0 0-.5-.5.5.5 0 0 0 .5-.5.5.5 0 0 0 .5.5Zm.5-.5a.5.5 0 0 1-.5.5.5.5 0 1 1-.5.5.5.5 0 1 1-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 1 1 0Zm.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM17 16.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM15.5 18a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShoppingCartDotted;

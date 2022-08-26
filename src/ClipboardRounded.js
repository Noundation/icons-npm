import * as React from "react";

const SvgClipboardRounded = ({ title, titleId, ...props }) => (
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
      d="M9 2h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H9ZM6 9V6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V9Zm4.5-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClipboardRounded;

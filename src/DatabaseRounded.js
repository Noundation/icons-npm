import * as React from "react";

const SvgDatabaseRounded = ({ title, titleId, ...props }) => (
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
      d="M12 2h3.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H12ZM6 15v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5V15Zm10-2.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5ZM16 5v.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDatabaseRounded;

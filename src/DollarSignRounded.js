import * as React from "react";

const SvgDollarSignRounded = ({ title, titleId, ...props }) => (
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
      d="M12 3h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H12Zm-1 5v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V8Zm2 6v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDollarSignRounded;

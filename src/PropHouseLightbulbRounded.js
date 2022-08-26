import * as React from "react";

const SvgPropHouseLightbulbRounded = ({ title, titleId, ...props }) => (
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
      d="M8 6.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5Zm7 5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Zm-1 .5v-.5a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5H9v-1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5H9v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5V12Zm-5.5-2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0 0 1h1Zm2 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm2.5 8h.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1H13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPropHouseLightbulbRounded;

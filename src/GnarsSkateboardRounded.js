import * as React from "react";

const SvgGnarsSkateboardRounded = ({ title, titleId, ...props }) => (
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
      d="M5 8h14.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H5Zm13 6.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1Zm-9.5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGnarsSkateboardRounded;

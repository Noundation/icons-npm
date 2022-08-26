import * as React from "react";

const SvgAlertTriangleRounded = ({ title, titleId, ...props }) => (
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
      d="M11 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5ZM18 19h.5a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1H18Zm-7-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0-4.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertTriangleRounded;
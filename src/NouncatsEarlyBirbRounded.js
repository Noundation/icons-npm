import * as React from "react";

const SvgNouncatsEarlyBirbRounded = ({ title, titleId, ...props }) => (
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
      d="M10 5.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5Zm5 8.5h.5a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5H15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNouncatsEarlyBirbRounded;

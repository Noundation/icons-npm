import * as React from "react";

const SvgNounsNounsPartBodyRounded = ({ title, titleId, ...props }) => (
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
      d="M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounsNounsPartBodyRounded;

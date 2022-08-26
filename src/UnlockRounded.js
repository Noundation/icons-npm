import * as React from "react";

const SvgUnlockRounded = ({ title, titleId, ...props }) => (
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
      d="M9 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h10a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5ZM18 13v-.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnlockRounded;

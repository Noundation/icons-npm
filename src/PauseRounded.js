import * as React from "react";

const SvgPauseRounded = ({ title, titleId, ...props }) => (
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
      d="M6 3h-.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H6Zm1.5 2a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1ZM13 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-17ZM15.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPauseRounded;

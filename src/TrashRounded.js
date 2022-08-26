import * as React from "react";

const SvgTrashRounded = ({ title, titleId, ...props }) => (
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
      d="M8 2h-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5H8Zm6.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h5ZM10 8H7.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrashRounded;

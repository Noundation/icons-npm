import * as React from "react";

const SvgThumbsDownRounded = ({ title, titleId, ...props }) => (
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
      d="M7 3H5.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7ZM5 7v4.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V7Zm14 4h-.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H19Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbsDownRounded;

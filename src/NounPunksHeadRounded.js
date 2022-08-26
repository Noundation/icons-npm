import * as React from "react";

const SvgNounPunksHeadRounded = ({ title, titleId, ...props }) => (
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
      d="M9 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounPunksHeadRounded;

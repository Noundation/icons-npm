import * as React from "react";

const SvgRssRounded = ({ title, titleId, ...props }) => (
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
      d="M10 5.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 1 .5.5Zm0 8a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5Zm-4 4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5Zm3 .5v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRssRounded;

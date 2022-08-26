import * as React from "react";

const SvgMiscMacOsFinderRounded = ({ title, titleId, ...props }) => (
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
      d="M11 5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H11Zm2 7h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5H13Zm-7 9H3.5a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5H6ZM7 8v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V8Zm8.5-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMiscMacOsFinderRounded;

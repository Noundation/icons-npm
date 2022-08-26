import * as React from "react";

const SvgGnarsFaviconRounded = ({ title, titleId, ...props }) => (
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
      d="M7 6h-.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5H7Zm8 11h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGnarsFaviconRounded;

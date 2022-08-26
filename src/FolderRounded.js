import * as React from "react";

const SvgFolderRounded = ({ title, titleId, ...props }) => (
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
      d="M2 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h9a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-15Zm8 3a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolderRounded;

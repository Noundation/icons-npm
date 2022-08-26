import * as React from "react";

const SvgTabletRounded = ({ title, titleId, ...props }) => (
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
      d="M5 2h-.5a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5H5Zm1 5V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTabletRounded;

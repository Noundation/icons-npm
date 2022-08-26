import * as React from "react";

const SvgMenuRounded = ({ title, titleId, ...props }) => (
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
      d="M5 6h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H5Zm13 5h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H18Zm1 5H4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H19Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMenuRounded;

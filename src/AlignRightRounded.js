import * as React from "react";

const SvgAlignRightRounded = ({ title, titleId, ...props }) => (
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
      d="M4 5h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4Zm0 8h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4Zm3-3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1ZM8 17h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlignRightRounded;

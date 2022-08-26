import * as React from "react";

const SvgTableRounded = ({ title, titleId, ...props }) => (
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
      d="M4 3h-.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H4Zm15 3v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6ZM9 8v.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V8Zm-4 5v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V13Zm6 4v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V17Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTableRounded;

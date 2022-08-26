import * as React from "react";

const SvgColumnsRounded = ({ title, titleId, ...props }) => (
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
      d="M4 3h-.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H4Zm1 4v11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V7Zm9 12h-.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgColumnsRounded;

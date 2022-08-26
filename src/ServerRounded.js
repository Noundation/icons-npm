import * as React from "react";

const SvgServerRounded = ({ title, titleId, ...props }) => (
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
      d="M4 3h-.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H4Zm14 2h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H18Zm-1 8h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H17Zm-8 2.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2ZM7 6h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgServerRounded;

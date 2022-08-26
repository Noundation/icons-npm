import * as React from "react";

const SvgTheBoneysBodyRounded = ({ title, titleId, ...props }) => (
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
      d="M4 6.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-11ZM15 17h2.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 0 0 1H15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTheBoneysBodyRounded;

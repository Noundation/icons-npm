import * as React from "react";

const SvgArchiveRounded = ({ title, titleId, ...props }) => (
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
      d="M3 4h-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5v9a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3Zm14 15h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H17ZM4 7v1.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5V7Zm7 7h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArchiveRounded;

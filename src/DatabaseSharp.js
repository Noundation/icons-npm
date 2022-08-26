import * as React from "react";

const SvgDatabaseSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h4v1h2v1h2v16h-2v1h-2v1H8v-1H6v-1H4V4h2V3h2V2h4ZM6 15v-1h2v1h8v-1h2v5h-2v1H8v-1H6v-4Zm10-2H8v-1H6V7h2v1h8V7h2v5h-2v1Zm0-8v1H8V4h8v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDatabaseSharp;

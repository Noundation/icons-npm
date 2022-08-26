import * as React from "react";

const SvgMailSharp = ({ title, titleId, ...props }) => (
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
      d="M2 4h20v16H2V4Zm15 2H7v1h1v1h1v1h1v1h1v1h2v-1h1V9h1V8h1V7h1V6ZM5 8V7H4v11h16V7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7V9H6V8H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMailSharp;

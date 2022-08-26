import * as React from "react";

const SvgMessageSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h2v-1h1v-1h1v-1h1v-1h1v-1h12V3H4Zm14 2h1v9H8v1H7v1H6v1H5V5h13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessageSharp;

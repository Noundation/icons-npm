import * as React from "react";

const SvgArchiveSharp = ({ title, titleId, ...props }) => (
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
      d="M3 4H2v7h2v10h16V11h2V4H3Zm14 15h1v-8H6v8h11ZM4 7v2h16V6H4v1Zm7 7h-1v2h4v-2h-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArchiveSharp;

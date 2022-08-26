import * as React from "react";

const SvgMenuSharp = ({ title, titleId, ...props }) => (
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
      d="M5 6H4v2h16V6H5Zm13 5h2v2H4v-2h14Zm1 5H4v2h16v-2h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMenuSharp;

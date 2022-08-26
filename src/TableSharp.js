import * as React from "react";

const SvgTableSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm15 3V5h-8v4h8V6ZM9 8v1H5V5h4v3Zm-4 5v6h4v-8H5v2Zm6 4v2h8v-8h-8v6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTableSharp;

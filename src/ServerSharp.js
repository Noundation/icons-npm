import * as React from "react";

const SvgServerSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm14 2h1v6H5V5h13Zm-1 8h2v6H5v-6h12Zm-8 2H6v3h3v-3ZM7 9H6V6h3v3H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgServerSharp;

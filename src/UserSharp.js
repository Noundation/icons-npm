import * as React from "react";

const SvgUserSharp = ({ title, titleId, ...props }) => (
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
      d="M13 3H9v1H8v1H7v6h1v1h1v1h6v-1h1v-1h1V5h-1V4h-1V3h-2Zm-3 8h4v-1h1V6h-1V5h-4v1H9v4h1v1ZM6 21H5v-7h14v7h-2v-5H7v5H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserSharp;

import * as React from "react";

const SvgPrintSharp = ({ title, titleId, ...props }) => (
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
      d="M7 3H6v6H3v10h3v2h12v-2h3V9h-3V3H7Zm1 5V5h8v4H8V8Zm-3 3v6h1v-4h12v4h1v-6H5Zm11 4v4H8v-4h8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrintSharp;

import * as React from "react";

const SvgInboxSharp = ({ title, titleId, ...props }) => (
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
      d="M12 4H5v2H4v2H3v2H2v10h20V10h-1V8h-1V6h-1V4h-7ZM6 9V7h1V6h10v1h1v2h1v2h-3v1h-1v1h-1v1h-4v-1H9v-1H8v-1H5V9h1Zm10 5v1h-1v1H9v-1H8v-1H7v-1H4v5h16v-5h-3v1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInboxSharp;

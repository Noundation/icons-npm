import * as React from "react";

const SvgArrowRightCircleSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2H8v1H7v1H6v1H5v1H4v1H3v1H2v8h1v1h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-5Zm2 2h2v1h1v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1H9v-1H8v-1H7v-1H6v-1H5v-1H4V9h1V8h1V7h1V6h1V5h1V4h4Zm-5 7v2h4v1h-1v2h2v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-2v2h1v1H8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowRightCircleSharp;

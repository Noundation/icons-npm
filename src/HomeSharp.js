import * as React from "react";

const SvgHomeSharp = ({ title, titleId, ...props }) => (
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
      d="M13 3h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v11H3V10h1V9h1V8h1V7h1V6h1V5h1V4h1V3h3Zm6 15v1h-3v-7H8v7H5v-8h1v-1h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h1v1h1v7Zm-6-4h1v5h-4v-5h3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHomeSharp;

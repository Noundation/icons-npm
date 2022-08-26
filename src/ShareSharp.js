import * as React from "react";

const SvgShareSharp = ({ title, titleId, ...props }) => (
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
      d="M13 4V3h-2v1h-1v1H9v1H8v1H7v2h2V8h1V7h1v9h2V7h1v1h1v1h2V7h-1V6h-1V5h-1V4h-1Zm-8 9v6h14v-7h2v9H3v-9h2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShareSharp;

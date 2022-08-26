import * as React from "react";

const SvgBellSharp = ({ title, titleId, ...props }) => (
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
      d="M11 3h3v1h2v1h1v2h1v4h1v3h1v3H4v-3h1v-3h1V7h1V5h1V4h2V3h1Zm-3 8V8h1V6h2V5h2v1h2v2h1v4h1v3H7v-3h1v-1Zm6 8h1v2h-2v1h-2v-1H9v-2h2v1h2v-1h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBellSharp;

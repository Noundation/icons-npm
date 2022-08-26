import * as React from "react";

const SvgExternalLinkSharp = ({ title, titleId, ...props }) => (
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
      d="M5 5v14h14v-5h2v7H3V3h7v2H5Zm15-2h-6v2h3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v3h2V3h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExternalLinkSharp;

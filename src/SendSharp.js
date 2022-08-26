import * as React from "react";

const SvgSendSharp = ({ title, titleId, ...props }) => (
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
      d="M20 3h1v3h-1v3h-1v4h-1v2h-1v2h-1v2h-1v2h-2v-4h-1v-2h-1v-2H9v-1H7v-1H3V9h2V8h2V7h2V6h2V5h3V4h4V3h2Zm-5 14v-2h1v-2h1v-3h1V8h-1v1h-1v1h-1v1h-1v1h-1v3h1v2h1ZM7 9h2V8h2V7h3V6h2v1h-1v1h-1v1h-1v1h-1v1H9v-1H7V9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSendSharp;

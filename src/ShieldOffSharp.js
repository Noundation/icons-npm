import * as React from "react";

const SvgShieldOffSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h-2v1H7v1h1v1h7v1h2v1h1v8h2V5h-1V4h-2V3h-3V2h-2Zm-8 8V8h1v1h1v6h1v1h1v1h1v1h2v1h2v-1h2v1h1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-2H4v-5Zm1-6h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V8H6V7H5V6H4V5H3V3h2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShieldOffSharp;

import * as React from "react";

const SvgNavigationSharp = ({ title, titleId, ...props }) => (
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
      d="M20 3h1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h-1v-4H9v-1H5v-1H3v-2h2v-1h2V9h2V8h2V7h2V6h2V5h2V4h2V3h1Zm-9 12h1v2h1v-2h1v-2h1v-2h1V9h1V7h1V6h-1v1h-2v1h-2v1h-2v1H9v1H7v1h2v1h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNavigationSharp;

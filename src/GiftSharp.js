import * as React from "react";

const SvgGiftSharp = ({ title, titleId, ...props }) => (
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
      d="M15 3h-1v1h-4V3H7v1H6v1H5v3H3v6h2v7h14v-7h2V8h-2V5h-1V4h-1V3h-2ZM7 7V6h1V5h2v1h1v2H7V7Zm9 1h1V6h-1V5h-2v1h-1v2h3Zm-9 9v2h4v-5H7v3Zm-2-5h6v-2H5v2Zm8 4v-2h4v5h-4v-3Zm1-4h-1v-2h6v2h-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGiftSharp;

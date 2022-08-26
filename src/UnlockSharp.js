import * as React from "react";

const SvgUnlockSharp = ({ title, titleId, ...props }) => (
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
      d="M9 2h6v1h1v1h1v3h-2V5h-1V4h-4v1H9v5h11v12H4V10h3V4h1V3h1V2Zm9 11v-1H6v8h12v-7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnlockSharp;

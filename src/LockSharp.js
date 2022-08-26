import * as React from "react";

const SvgLockSharp = ({ title, titleId, ...props }) => (
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
      d="M11 2h3v1h1v1h1v1h1v5h3v12H4V10h3V5h1V4h1V3h1V2h1ZM9 7V6h1V5h1V4h2v1h1v1h1v4H9V7Zm9 7v-2H6v8h12v-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLockSharp;

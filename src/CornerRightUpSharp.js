import * as React from "react";

const SvgCornerRightUpSharp = ({ title, titleId, ...props }) => (
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
      d="M14 3v1h-1v1h-1v1h-1v1h-1v2h2V8h1V7h1v10h-1v1h-1v1H3v2h10v-1h1v-1h1v-1h1V7h1v1h1v1h2V7h-1V6h-1V5h-1V4h-1V3h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerRightUpSharp;

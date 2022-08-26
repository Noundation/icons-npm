import * as React from "react";

const SvgCornerLeftUpSharp = ({ title, titleId, ...props }) => (
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
      d="M9 3v1h1v1h1v1h1v1h1v2h-2V8h-1V7H9v10h1v1h1v1h9v2H10v-1H9v-1H8v-1H7V7H6v1H5v1H3V7h1V6h1V5h1V4h1V3h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerLeftUpSharp;

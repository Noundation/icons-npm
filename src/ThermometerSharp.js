import * as React from "react";

const SvgThermometerSharp = ({ title, titleId, ...props }) => (
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
      d="M10 2h4v1h1v10h1v1h1v6h-1v1h-1v1H9v-1H8v-1H7v-6h1v-1h1V3h1V2Zm0 18h4v-1h1v-4h-1v-1h-1V4h-2v10h-1v1H9v4h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThermometerSharp;

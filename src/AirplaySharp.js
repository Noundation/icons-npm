import * as React from "react";

const SvgAirplaySharp = ({ title, titleId, ...props }) => (
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
      d="M2 4h20v14h-4v-2h2V6H4v10h2v2H2V4Zm3 18v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h1v1h1v2H5Zm8-5h-2v1h-1v1H9v1h6v-1h-1v-1h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAirplaySharp;

import * as React from "react";

const SvgCastSharp = ({ title, titleId, ...props }) => (
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
      d="M3 4H2v5h2V6h16v12h-7v2h9V4H3Zm-1 8v-2h4v1h2v1h2v2h1v2h1v4h-2v-4H9v-2H8v-1H6v-1H2Zm0 2v1h3v1h1v2h1v2h2v-2H8v-2H7v-2H5v-1H2v1Zm0 4v-2h2v2h1v2H3v-2H2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCastSharp;

import * as React from "react";

const SvgFilmSharp = ({ title, titleId, ...props }) => (
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
      d="M4 3H3v18h18V3H4Zm2 16H5v-2h2v2H6Zm1-5v1H5v-2h2v1Zm-1-3H5V9h2v2H6Zm1-5v1H5V5h2v1Zm3 13H9v-6h6v6h-5Zm5-9v1H9V5h6v5Zm3 9h-1v-2h2v2h-1Zm1-5v1h-2v-2h2v1Zm0-4v1h-2V9h2v1Zm0-4v1h-2V5h2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilmSharp;

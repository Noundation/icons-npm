import * as React from "react";

const SvgThumbsDownSharp = ({ title, titleId, ...props }) => (
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
      d="M7 3H5v1H4v1H3v8h1v1h1v1h4v5h2v1h4v-1h1v-3h1v-2h1v-2h4V3H7ZM5 7v5h1v1h5v5h1v1h2v-3h1v-2h1V5H6v1H5v1Zm14 4h-1V5h2v6h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbsDownSharp;

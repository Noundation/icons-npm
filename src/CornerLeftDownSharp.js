import * as React from "react";

const SvgCornerLeftDownSharp = ({ title, titleId, ...props }) => (
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
      d="M12 3h-2v1H9v1H8v1H7v11H6v-1H5v-1H3v2h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-2v1h-1v1H9V7h1V6h1V5h9V3h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCornerLeftDownSharp;

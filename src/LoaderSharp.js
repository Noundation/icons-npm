import * as React from "react";

const SvgLoaderSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h1v5h-2V2h1Zm6 2h2v2h-1v1h-1v1h-1v1h-2V7h1V6h1V5h1V4ZM3 11H2v2h5v-2H3Zm15 0h-1v2h5v-2h-4ZM7 18v1H6v1H4v-2h1v-1h1v-1h1v-1h2v2H8v1H7Zm6 4v-5h-2v5h2ZM8 7h1v2H7V8H6V7H5V6H4V4h2v1h1v1h1v1Zm12 11h-1v-1h-1v-1h-1v-1h-2v2h1v1h1v1h1v1h2v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLoaderSharp;

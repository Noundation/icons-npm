import * as React from "react";

const SvgUsersSharp = ({ title, titleId, ...props }) => (
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
      d="M10 5h1v1h1v4h-1v1H7v-1H6V6h1V5h3Zm-4 7H5v-1H4V5h1V4h1V3h6v1h1v1h1v6h-1v1h-1v1H6v-1Zm11-7h-2V3h3v1h1v1h1v6h-1v1h-1v1h-3v-2h2v-1h1V6h-1V5ZM3 21H2v-7h14v7h-2v-5H4v5H3Zm16-5h1v5h2v-7h-5v2h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUsersSharp;

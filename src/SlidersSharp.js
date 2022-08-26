import * as React from "react";

const SvgSlidersSharp = ({ title, titleId, ...props }) => (
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
      d="M5 3H4v8h2V3H5ZM2 13h6v2H6v6H4v-6H2v-2Zm9 7v-9h2v10h-2v-1Zm7-1v2h2v-6h2v-2h-6v2h2v4Zm0-10v2h2V3h-2v6Zm-6-6h-1v4H9v2h6V7h-2V3h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSlidersSharp;

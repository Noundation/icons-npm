import * as React from "react";

const SvgWifiSharp = ({ title, titleId, ...props }) => (
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
      d="M13 5h2v1h2v1h2v1h2v1h1v2h-2v-1h-2V9h-2V8h-2V7h-4v1H8v1H6v1H4v1H2V9h1V8h2V7h2V6h2V5h4Zm-6 6h1v-1h2V9h4v1h2v1h2v1h1v2h-2v-1h-2v-1h-2v-1h-2v1H9v1H7v1H5v-2h1v-1h1Zm1 5v1h2v-1h1v-1h2v1h1v1h2v-2h-1v-1h-2v-1h-2v1H9v1H8v1Zm4 2h1v2h-2v-2h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWifiSharp;

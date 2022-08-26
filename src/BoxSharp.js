import * as React from "react";

const SvgBoxSharp = ({ title, titleId, ...props }) => (
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
      d="M11 3h2v1h2v1h2v1h2v1h2v10h-2v1h-2v1h-2v1h-2v1h-2v-1H9v-1H7v-1H5v-1H3V7h2V6h2V5h2V4h2V3Zm0 15v-6H9v-1H7v-1H5v6h2v1h2v1h2Zm1-7h1v-1h2V9h2V7h-2V6h-2V5h-2v1H9v1H7v2h2v1h2v1h1Zm5-1v1h-2v1h-2v6h2v-1h2v-1h2v-6h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBoxSharp;

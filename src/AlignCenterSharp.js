import * as React from "react";

const SvgAlignCenterSharp = ({ title, titleId, ...props }) => (
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
      d="M4 5H3v2h18V5H4Zm0 8H3v2h18v-2H4Zm1-4h14v2H5V9Zm1 8H5v2h14v-2H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlignCenterSharp;

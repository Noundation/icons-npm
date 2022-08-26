import * as React from "react";

const SvgAlignJustifySharp = ({ title, titleId, ...props }) => (
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
      d="M4 5H3v2h18V5H4Zm0 8H3v2h18v-2H4Zm1-4h16v2H3V9h2Zm0 8h16v2H3v-2h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlignJustifySharp;

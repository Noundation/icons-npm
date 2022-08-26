import * as React from "react";

const SvgBatterySharp = ({ title, titleId, ...props }) => (
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
      d="M3 6H2v12h17V6H3Zm1 2v8h13V8H4Zm16 5v2h2V9h-2v4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBatterySharp;

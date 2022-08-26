import * as React from "react";

const SvgBarChartSharp = ({ title, titleId, ...props }) => (
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
      d="M12 3h-1v18h2V3h-1Zm5 18V9h2v12h-2ZM5 21v-8h2v8H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBarChartSharp;

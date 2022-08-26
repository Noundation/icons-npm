import * as React from "react";

const SvgPlusSharp = ({ title, titleId, ...props }) => (
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
      d="M12 5h-1v6H5v2h6v6h2v-6h6v-2h-6V5h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlusSharp;

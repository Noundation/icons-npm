import * as React from "react";

const SvgArrowDownSharp = ({ title, titleId, ...props }) => (
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
      d="M12 5h-1v10h-1v-1H9v-1H8v-1H7v-1H5v2h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-2v1h-1v1h-1v1h-1v1h-1V5h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDownSharp;

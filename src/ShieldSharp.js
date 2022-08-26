import * as React from "react";

const SvgShieldSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h-2v1H7v1H5v1H4v10h1v2h1v1h1v1h1v1h1v1h2v1h2v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V5h-1V4h-2V3h-3V2h-2Zm6 12v1h-1v1h-1v1h-1v1h-2v1h-2v-1H9v-1H8v-1H7v-1H6V7h1V6h2V5h6v1h2v1h1v7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShieldSharp;

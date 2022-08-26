import * as React from "react";

const SvgMoreVerticalSharp = ({ title, titleId, ...props }) => (
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
      d="M12 4h-1v1h-1v2h1v1h2V7h1V5h-1V4h-1Zm-1 6v1h-1v2h1v1h2v-1h1v-2h-1v-1h-2Zm0 7v-1h2v1h1v2h-1v1h-2v-1h-1v-2h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoreVerticalSharp;

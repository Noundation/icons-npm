import * as React from "react";

const SvgMicSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h-1v1H9v2H8v8h1v2h2v1h2v-1h2v-2h1V5h-1V3h-2V2h-1Zm-2 11V5h1V4h2v1h1v8h-1v1h-2v-1h-1Zm-6-2h2v2h1v2h1v1h2v1h4v-1h2v-1h1v-2h1v-2h2v2h-1v2h-1v2h-2v1h-2v1h-4v-1H8v-1H6v-2H5v-2H4v-2Zm5 9h6v2H9v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMicSharp;

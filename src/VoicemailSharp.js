import * as React from "react";

const SvgVoicemailSharp = ({ title, titleId, ...props }) => (
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
      d="M7 10h1v1h1v2H8v1H6v-1H5v-2h1v-1h1Zm-3 5h1v1h14v-1h1v-1h1v-4h-1V9h-1V8h-4v1h-1v1h-1v4h-2v-4h-1V9H9V8H5v1H4v1H3v4h1v1Zm14-5h-2v1h-1v2h1v1h2v-1h1v-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVoicemailSharp;

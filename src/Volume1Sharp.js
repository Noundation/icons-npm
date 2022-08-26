import * as React from "react";

const SvgVolume1Sharp = ({ title, titleId, ...props }) => (
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
      d="M14 4h1v16h-4v-1h-1v-1H9v-1H8v-1H3v-1H2V9h1V8h5V7h1V6h1V5h1V4h3Zm-2 13h-1v-1h-1v-1H9v-1H5v-1H4v-2h1v-1h4V9h1V8h1V7h1V6h1v12h-1v-1Zm5-9h1v2h1v4h-1v2h-2v-2h1v-4h-1V8h1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVolume1Sharp;

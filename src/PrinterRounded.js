import * as React from "react";

const SvgPrinterRounded = ({ title, titleId, ...props }) => (
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
      d="M7 3h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5H7Zm1 5V5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V8Zm-2.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-13Zm10 4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrinterRounded;

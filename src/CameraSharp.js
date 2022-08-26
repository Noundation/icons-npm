import * as React from "react";

const SvgCameraSharp = ({ title, titleId, ...props }) => (
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
      d="M12 5H9v1H8v1H2v13h20V7h-6V6h-1V5h-3Zm8 12v1H4V9h5V8h1V7h4v1h1v1h5v8Zm-7-7h2v2h1v2h-1v2h-2v1h-2v-1H9v-2H8v-2h1v-2h2V9h2v1Zm-3 3v-1h1v-1h2v1h1v2h-1v1h-2v-1h-1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCameraSharp;

import * as React from "react";

const SvgBluetoothSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2h-1v7h-1V8H9V7H7v2h1v1h1v1h1v2H9v1H8v1H7v2h2v-1h1v-1h1v7h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-2h1v-1h1V9h1V7h-1V6h-1V5h-1V4h-1V3h-1V2Zm2 6v1h-1V7h1v1Zm0 8v1h-1v-2h1v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBluetoothSharp;

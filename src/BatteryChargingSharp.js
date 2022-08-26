import * as React from "react";

const SvgBatteryChargingSharp = ({ title, titleId, ...props }) => (
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
      d="M11 6h1v3h-1v1h-1v1h5v2h-1v1h-1v1h-1v1h-1v1h-1v1H9v-3h1v-1h1v-1H6v-2h1v-1h1V9h1V8h1V7h1V6Zm4 0h-1v2h3v8h-3v2h5V6h-4Zm6 3h-1v6h2V9h-1ZM6 16h1v2H2V6h5v2H4v8h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBatteryChargingSharp;

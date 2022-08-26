import * as React from "react";

const SvgBatteryRounded = ({ title, titleId, ...props }) => (
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
      d="M3 6h-.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H3Zm1.5 2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-12ZM20 13v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBatteryRounded;

import * as React from "react";

const SvgCalendarSharp = ({ title, titleId, ...props }) => (
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
      d="M8 2H7v2H3v17h18V4h-4V2h-2v2H9V2H8Zm11 4v4H5V6h2v2h2V6h6v2h2V6h2Zm0 6v7H5v-7h14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendarSharp;

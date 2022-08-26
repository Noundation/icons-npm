import * as React from "react";

const SvgListSharp = ({ title, titleId, ...props }) => (
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
      d="M4 5H3v2h2V5H4Zm4 0H7v2h14V5H8Zm11 6h2v2H7v-2h12Zm1 6H7v2h14v-2h-1ZM3 17h2v2H3v-2Zm1-6H3v2h2v-2H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgListSharp;

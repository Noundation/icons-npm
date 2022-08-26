import * as React from "react";

const SvgCreditCardRounded = ({ title, titleId, ...props }) => (
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
      d="M3 4h-.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H3Zm1.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-15ZM6 11h13.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCreditCardRounded;

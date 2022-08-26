import * as React from "react";

const SvgCreditCardSharp = ({ title, titleId, ...props }) => (
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
      d="M3 4H2v16h20V4H3Zm1 2v3h16V6H4Zm2 5h14v7H4v-7h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCreditCardSharp;

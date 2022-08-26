import * as React from "react";

const SvgShoppingCartSharp = ({ title, titleId, ...props }) => (
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
      d="M4 4H3v2h3v2h1v3h1v3h1v1h9v-1h1v-2h1V9h1V7H8V5H7V4H4Zm8 5H9v1h1v3h7v-2h1V9h-6Zm-3 8v-1h2v1h1v2h-1v1H9v-1H8v-2h1Zm6 0v2h1v1h2v-1h1v-2h-1v-1h-2v1h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShoppingCartSharp;

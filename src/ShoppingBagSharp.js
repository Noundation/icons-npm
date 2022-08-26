import * as React from "react";

const SvgShoppingBagSharp = ({ title, titleId, ...props }) => (
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
      d="M12 2H5v2H4v2H3v15h18V6h-1V4h-1V2h-7ZM7 5H6v2h12V5h-1V4H7v1ZM5 9h14v10H5V9Zm7 4h-2v-1H8v2h2v1h4v-1h2v-2h-2v1h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShoppingBagSharp;

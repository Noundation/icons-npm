import * as React from "react";

const SvgShoppingBagRounded = ({ title, titleId, ...props }) => (
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
      d="M12 2H5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H12ZM7 4.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5Zm-2 5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9Zm7 3.5h-1.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShoppingBagRounded;

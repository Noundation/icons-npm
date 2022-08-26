import * as React from "react";

const SvgDollarSignSharp = ({ title, titleId, ...props }) => (
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
      d="M12 3h-1v2H6v8h5v4H6v2h5v2h2v-2h5v-8h-5V7h5V5h-5V3h-1Zm-1 5v3H8V7h3v1Zm2 6v-1h3v4h-3v-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDollarSignSharp;

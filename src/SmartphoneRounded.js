import * as React from "react";

const SvgSmartphoneRounded = ({ title, titleId, ...props }) => (
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
      d="M6 2h-.5a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5H6Zm4 2.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSmartphoneRounded;

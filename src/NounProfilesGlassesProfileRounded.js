import * as React from "react";

const SvgNounProfilesGlassesProfileRounded = ({ title, titleId, ...props }) => (
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
      d="M16 4h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNounProfilesGlassesProfileRounded;

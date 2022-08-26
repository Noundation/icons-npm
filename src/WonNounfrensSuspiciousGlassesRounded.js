import * as React from "react";

const SvgWonNounfrensSuspiciousGlassesRounded = ({
  title,
  titleId,
  ...props
}) => (
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
      d="M8 8.5a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5v-1ZM7 12v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V12Zm8 0v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1 .5.5 0 0 1-.5-.5.5.5 0 0 0-1 0v.5Zm1-2h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 0 1H16Zm-6.5 5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5Zm7.5.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5.5.5 0 0 1 .5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWonNounfrensSuspiciousGlassesRounded;

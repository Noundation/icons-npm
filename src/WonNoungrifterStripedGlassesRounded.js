import * as React from "react";

const SvgWonNoungrifterStripedGlassesRounded = ({
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
      d="M8 8h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H8Zm3.5 2a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Zm-.5 1h.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1H11Zm0 2h.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1H11Zm4-1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm3.5-1.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Zm.5 3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWonNoungrifterStripedGlassesRounded;

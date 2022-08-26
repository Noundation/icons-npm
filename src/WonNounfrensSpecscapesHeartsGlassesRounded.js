import * as React from "react";

const SvgWonNounfrensSpecscapesHeartsGlassesRounded = ({
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
      d="M9 7H7.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-.5-.5H9Zm2 1.5a.5.5 0 1 1 .5.5.5.5 0 0 0-.5.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 0 1 0Zm-.5 3.5a.5.5 0 0 0 .5-.5.5.5 0 1 1 .5.5.5.5 0 0 0-.5.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 0 .5.5Zm0 3a.5.5 0 0 0 .5-.5.5.5 0 1 1 .5.5.5.5 0 0 0-.5.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 1 1 .5-.5.5.5 0 0 0 .5.5ZM19 8.5a.5.5 0 0 0-1 0 .5.5 0 0 1-1 0 .5.5 0 1 0-.5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5Zm-1 3a.5.5 0 0 1-1 0 .5.5 0 1 0-.5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 0-.5-.5Zm0 3a.5.5 0 0 1-1 0 .5.5 0 1 0-.5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5.5.5 0 1 0-.5-.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWonNounfrensSpecscapesHeartsGlassesRounded;

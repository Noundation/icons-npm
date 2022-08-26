import * as React from "react";

const SvgMusicSharp = ({ title, titleId, ...props }) => (
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
      d="M20 2h2v15h-1v2h-2v1h-2v-1h-2v-2h-1v-2h1v-2h2v-1h2v1h1V4h-2v1h-6v1h-2v13H9v2H7v1H5v-1H3v-2H2v-2h1v-2h2v-1h2v1h1V4h4V3h6V2h2Zm-2 12h-1v1h-1v2h1v1h2v-1h1v-2h-1v-1h-1ZM5 16v1H4v2h1v1h2v-1h1v-2H7v-1H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMusicSharp;

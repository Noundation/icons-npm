import * as React from "react";

const SvgNounsBirdFlyingSharp = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      d="M4 11h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 11h1v1h-1zM12 11h1v1h-1zM10 13h1v1h-1zM12 13h1v1h-1zM14 9h1v1h-1zM16 9h1v1h-1zM18 11h1v1h-1zM4 12h1v1H4zM6 10h1v1H6zM8 10h1v1H8zM10 12h1v1h-1zM12 12h1v1h-1zM10 14h1v1h-1zM12 14h1v1h-1zM14 10h1v1h-1zM16 10h1v1h-1zM18 12h1v1h-1zM5 12h1v1H5zM7 10h1v1H7zM9 10h1v1H9zM11 12h1v1h-1zM13 12h1v1h-1zM11 14h1v1h-1zM13 14h1v1h-1zM15 10h1v1h-1zM17 10h1v1h-1zM19 12h1v1h-1zM5 11h1v1H5zM7 9h1v1H7zM9 9h1v1H9zM11 11h1v1h-1zM13 11h1v1h-1zM11 13h1v1h-1zM13 13h1v1h-1zM15 9h1v1h-1zM17 9h1v1h-1zM19 11h1v1h-1z"
    />
  </svg>
);

export default SvgNounsBirdFlyingSharp;

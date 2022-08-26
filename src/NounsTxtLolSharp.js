import * as React from "react";

const SvgNounsTxtLolSharp = ({ title, titleId, ...props }) => (
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
      d="M5 11h1v1H5zM11 11h1v1h-1zM5 13h1v1H5zM11 13h1v1h-1zM7 13h1v1H7zM13 13h1v1h-1zM13 11h1v1h-1zM13 9h1v1h-1zM17 9h1v1h-1zM17 11h1v1h-1zM17 13h1v1h-1zM19 13h1v1h-1zM5 9h1v1H5zM11 9h1v1h-1zM4 11h1v1H4zM10 11h1v1h-1zM4 13h1v1H4zM10 13h1v1h-1zM6 13h1v1H6zM12 13h1v1h-1zM12 11h1v1h-1zM12 9h1v1h-1zM16 9h1v1h-1zM16 11h1v1h-1zM16 13h1v1h-1zM18 13h1v1h-1zM4 9h1v1H4zM10 9h1v1h-1zM4 12h1v1H4zM10 12h1v1h-1zM4 14h1v1H4zM10 14h1v1h-1zM6 14h1v1H6zM12 14h1v1h-1zM12 12h1v1h-1zM12 10h1v1h-1zM16 10h1v1h-1zM16 12h1v1h-1zM16 14h1v1h-1zM18 14h1v1h-1zM4 10h1v1H4zM10 10h1v1h-1zM5 12h1v1H5zM11 12h1v1h-1zM5 14h1v1H5zM11 14h1v1h-1zM7 14h1v1H7zM13 14h1v1h-1zM13 12h1v1h-1zM13 10h1v1h-1zM17 10h1v1h-1zM17 12h1v1h-1zM17 14h1v1h-1zM19 14h1v1h-1zM5 10h1v1H5zM11 10h1v1h-1z"
    />
  </svg>
);

export default SvgNounsTxtLolSharp;

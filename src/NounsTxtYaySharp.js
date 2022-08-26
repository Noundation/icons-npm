import * as React from "react";

const SvgNounsTxtYaySharp = ({ title, titleId, ...props }) => (
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
      d="M3 9h1v1H3zM5 11h1v1H5zM7 9h1v1H7zM9 11h1v1H9zM9 13h1v1H9zM11 9h1v1h-1zM11 11h1v1h-1zM13 11h1v1h-1zM13 13h1v1h-1zM15 9h1v1h-1zM19 9h1v1h-1zM17 11h1v1h-1zM17 13h1v1h-1zM5 13h1v1H5zM4 9h1v1H4zM6 11h1v1H6zM8 9h1v1H8zM10 11h1v1h-1zM10 13h1v1h-1zM12 9h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM14 13h1v1h-1zM16 9h1v1h-1zM20 9h1v1h-1zM18 11h1v1h-1zM18 13h1v1h-1zM6 13h1v1H6zM3 10h1v1H3zM5 12h1v1H5zM7 10h1v1H7zM9 12h1v1H9zM9 14h1v1H9zM11 10h1v1h-1zM11 12h1v1h-1zM13 12h1v1h-1zM13 14h1v1h-1zM15 10h1v1h-1zM19 10h1v1h-1zM17 12h1v1h-1zM17 14h1v1h-1zM5 14h1v1H5zM4 10h1v1H4zM6 12h1v1H6zM8 10h1v1H8zM10 12h1v1h-1zM10 14h1v1h-1zM12 10h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM14 14h1v1h-1zM16 10h1v1h-1zM20 10h1v1h-1zM18 12h1v1h-1zM18 14h1v1h-1zM6 14h1v1H6z"
    />
  </svg>
);

export default SvgNounsTxtYaySharp;

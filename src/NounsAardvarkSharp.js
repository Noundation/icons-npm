import * as React from "react";

const SvgNounsAardvarkSharp = ({ title, titleId, ...props }) => (
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
      d="M16 9h1v1h-1zM14 11h1v1h-1zM12 9h1v1h-1zM12 11h1v1h-1zM10 9h1v1h-1zM8 9h1v1H8zM6 11h1v1H6zM8 11h1v1H8zM10 11h1v1h-1zM4 13h1v1H4zM8 13h1v1H8zM12 13h1v1h-1zM16 13h1v1h-1zM18 13h1v1h-1zM17 9h1v1h-1zM15 11h1v1h-1zM13 9h1v1h-1zM13 11h1v1h-1zM11 9h1v1h-1zM9 9h1v1H9zM7 11h1v1H7zM9 11h1v1H9zM11 11h1v1h-1zM5 13h1v1H5zM9 13h1v1H9zM13 13h1v1h-1zM17 13h1v1h-1zM19 13h1v1h-1zM16 10h1v1h-1zM14 12h1v1h-1zM12 10h1v1h-1zM12 12h1v1h-1zM10 10h1v1h-1zM8 10h1v1H8zM6 12h1v1H6zM8 12h1v1H8zM10 12h1v1h-1zM4 14h1v1H4zM8 14h1v1H8zM12 14h1v1h-1zM16 14h1v1h-1zM18 14h1v1h-1zM17 10h1v1h-1zM15 12h1v1h-1zM13 10h1v1h-1zM13 12h1v1h-1zM11 10h1v1h-1zM9 10h1v1H9zM7 12h1v1H7zM9 12h1v1H9zM11 12h1v1h-1zM5 14h1v1H5zM9 14h1v1H9zM13 14h1v1h-1zM17 14h1v1h-1zM19 14h1v1h-1z"
    />
  </svg>
);

export default SvgNounsAardvarkSharp;

import * as React from "react";

const SvgNounsSunsetSharp = ({ title, titleId, ...props }) => (
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
      d="M7 10h1v1H7zM11 8h1v1h-1zM15 10h1v1h-1zM17 14h1v1h-1zM13 14h1v1h-1zM13 12h1v1h-1zM11 12h1v1h-1zM9 12h1v1H9zM9 14h1v1H9zM11 14h1v1h-1zM5 14h1v1H5zM8 10h1v1H8zM12 8h1v1h-1zM16 10h1v1h-1zM18 14h1v1h-1zM14 14h1v1h-1zM14 12h1v1h-1zM12 12h1v1h-1zM10 12h1v1h-1zM10 14h1v1h-1zM12 14h1v1h-1zM6 14h1v1H6zM7 11h1v1H7zM11 9h1v1h-1zM15 11h1v1h-1zM17 15h1v1h-1zM13 15h1v1h-1zM13 13h1v1h-1zM11 13h1v1h-1zM9 13h1v1H9zM9 15h1v1H9zM11 15h1v1h-1zM5 15h1v1H5zM8 11h1v1H8zM12 9h1v1h-1zM16 11h1v1h-1zM18 15h1v1h-1zM14 15h1v1h-1zM14 13h1v1h-1zM12 13h1v1h-1zM10 13h1v1h-1zM10 15h1v1h-1zM12 15h1v1h-1zM6 15h1v1H6z"
    />
  </svg>
);

export default SvgNounsSunsetSharp;

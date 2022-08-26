import * as React from "react";

const SvgNounsRingsSharp = ({ title, titleId, ...props }) => (
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
      d="M16 5h1v1h-1zM18 7h1v1h-1zM18 9h1v1h-1zM18 11h1v1h-1zM16 13h1v1h-1zM14 13h1v1h-1zM14 11h1v1h-1zM12 13h1v1h-1zM14 15h1v1h-1zM12 17h1v1h-1zM10 17h1v1h-1zM8 17h1v1H8zM6 15h1v1H6zM6 13h1v1H6zM6 11h1v1H6zM14 5h1v1h-1zM12 5h1v1h-1zM10 7h1v1h-1zM10 9h1v1h-1zM10 11h1v1h-1zM12 9h1v1h-1zM8 9h1v1H8zM15 5h1v1h-1zM17 7h1v1h-1zM17 9h1v1h-1zM17 11h1v1h-1zM15 13h1v1h-1zM13 13h1v1h-1zM13 11h1v1h-1zM11 13h1v1h-1zM13 15h1v1h-1zM11 17h1v1h-1zM9 17h1v1H9zM7 17h1v1H7zM5 15h1v1H5zM5 13h1v1H5zM5 11h1v1H5zM13 5h1v1h-1zM11 5h1v1h-1zM9 7h1v1H9zM9 9h1v1H9zM9 11h1v1H9zM11 9h1v1h-1zM7 9h1v1H7zM15 6h1v1h-1zM17 8h1v1h-1zM17 10h1v1h-1zM17 12h1v1h-1zM15 14h1v1h-1zM13 14h1v1h-1zM13 12h1v1h-1zM11 14h1v1h-1zM13 16h1v1h-1zM11 18h1v1h-1zM9 18h1v1H9zM7 18h1v1H7zM5 16h1v1H5zM5 14h1v1H5zM5 12h1v1H5zM13 6h1v1h-1zM11 6h1v1h-1zM9 8h1v1H9zM9 10h1v1H9zM9 12h1v1H9zM11 10h1v1h-1zM7 10h1v1H7zM16 6h1v1h-1zM18 8h1v1h-1zM18 10h1v1h-1zM18 12h1v1h-1zM16 14h1v1h-1zM14 14h1v1h-1zM14 12h1v1h-1zM12 14h1v1h-1zM14 16h1v1h-1zM12 18h1v1h-1zM10 18h1v1h-1zM8 18h1v1H8zM6 16h1v1H6zM6 14h1v1H6zM6 12h1v1H6zM14 6h1v1h-1zM12 6h1v1h-1zM10 8h1v1h-1zM10 10h1v1h-1zM10 12h1v1h-1zM12 10h1v1h-1zM8 10h1v1H8z"
    />
  </svg>
);

export default SvgNounsRingsSharp;

import * as React from "react";

const SvgNounsInfinitySharp = ({ title, titleId, ...props }) => (
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
      d="M6 7h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM12 7h1v1h-1zM6 9h1v1H6zM8 11h1v1H8zM10 11h1v1h-1zM12 11h1v1h-1zM12 13h1v1h-1zM14 13h1v1h-1zM16 13h1v1h-1zM18 15h1v1h-1zM18 17h1v1h-1zM16 19h1v1h-1zM14 19h1v1h-1zM12 17h1v1h-1zM5 7h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM11 7h1v1h-1zM5 9h1v1H5zM7 11h1v1H7zM9 11h1v1H9zM11 11h1v1h-1zM11 13h1v1h-1zM13 13h1v1h-1zM15 13h1v1h-1zM17 15h1v1h-1zM17 17h1v1h-1zM15 19h1v1h-1zM13 19h1v1h-1zM11 17h1v1h-1zM5 6h1v1H5zM7 4h1v1H7zM9 4h1v1H9zM11 6h1v1h-1zM5 8h1v1H5zM7 10h1v1H7zM9 10h1v1H9zM11 10h1v1h-1zM11 12h1v1h-1zM13 12h1v1h-1zM15 12h1v1h-1zM17 14h1v1h-1zM17 16h1v1h-1zM15 18h1v1h-1zM13 18h1v1h-1zM11 16h1v1h-1zM6 6h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM12 6h1v1h-1zM6 8h1v1H6zM8 10h1v1H8zM10 10h1v1h-1zM12 10h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM16 12h1v1h-1zM18 14h1v1h-1zM18 16h1v1h-1zM16 18h1v1h-1zM14 18h1v1h-1zM12 16h1v1h-1z"
    />
  </svg>
);

export default SvgNounsInfinitySharp;

import * as React from "react";

const SvgNounsLoadingSharp = ({ title, titleId, ...props }) => (
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
      d="M4 8h1v1H4zM4 9h1v1H4zM4 10h1v1H4zM4 12h1v1H4zM4 13h1v1H4zM4 14h1v1H4zM4 15h1v1H4zM4 16h1v1H4zM5 8h1v1H5zM5 9h1v1H5zM5 10h1v1H5zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1zM10 10h1v1h-1zM10 11h1v1h-1zM5 12h1v1H5zM5 13h1v1H5zM6 14h1v1H6zM6 15h1v1H6zM6 16h1v1H6zM7 16h1v1H7zM8 16h1v1H8zM8 15h1v1H8zM10 15h1v1h-1zM9 16h1v1H9zM10 16h1v1h-1zM11 16h1v1h-1zM12 16h1v1h-1zM12 15h1v1h-1zM14 15h1v1h-1zM14 16h1v1h-1zM15 16h1v1h-1zM16 16h1v1h-1zM17 16h1v1h-1zM18 16h1v1h-1zM19 16h1v1h-1zM12 11h1v1h-1zM12 12h1v1h-1zM12 13h1v1h-1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM10 7h1v1h-1zM11 7h1v1h-1zM12 7h1v1h-1zM12 8h1v1h-1zM12 9h1v1h-1zM15 9h1v1h-1zM16 9h1v1h-1zM17 9h1v1h-1zM17 10h1v1h-1zM17 11h1v1h-1zM19 13h1v1h-1zM19 12h1v1h-1zM19 11h1v1h-1zM19 10h1v1h-1zM19 9h1v1h-1zM19 8h1v1h-1zM19 7h1v1h-1zM18 7h1v1h-1zM17 7h1v1h-1zM16 7h1v1h-1zM15 7h1v1h-1zM14 7h1v1h-1zM13 7h1v1h-1zM13 16h1v1h-1zM7 14h1v1H7zM8 14h1v1H8zM9 14h1v1H9zM10 14h1v1h-1zM11 14h1v1h-1zM12 14h1v1h-1zM13 14h1v1h-1zM14 14h1v1h-1zM16 15h1v1h-1zM18 15h1v1h-1zM19 14h1v1h-1zM18 14h1v1h-1zM15 14h1v1h-1zM16 14h1v1h-1zM17 14h1v1h-1zM5 14h1v1H5zM5 16h1v1H5z"
    />
  </svg>
);

export default SvgNounsLoadingSharp;

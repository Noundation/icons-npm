import * as React from "react";

const SvgNounsEyeSharp = ({ title, titleId, ...props }) => (
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
      d="M9 7h1v1H9zM11 7h1v1h-1zM13 7h1v1h-1zM15 7h1v1h-1zM17 9h1v1h-1zM19 11h1v1h-1zM17 13h1v1h-1zM15 15h1v1h-1zM13 15h1v1h-1zM11 15h1v1h-1zM9 15h1v1H9zM7 13h1v1H7zM5 11h1v1H5zM7 9h1v1H7zM11 9h1v1h-1zM13 9h1v1h-1zM13 11h1v1h-1zM11 11h1v1h-1zM8 7h1v1H8zM10 7h1v1h-1zM12 7h1v1h-1zM14 7h1v1h-1zM16 9h1v1h-1zM18 11h1v1h-1zM16 13h1v1h-1zM14 15h1v1h-1zM12 15h1v1h-1zM10 15h1v1h-1zM8 15h1v1H8zM6 13h1v1H6zM4 11h1v1H4zM6 9h1v1H6zM10 9h1v1h-1zM12 9h1v1h-1zM12 11h1v1h-1zM10 11h1v1h-1zM8 8h1v1H8zM10 8h1v1h-1zM12 8h1v1h-1zM14 8h1v1h-1zM16 10h1v1h-1zM18 12h1v1h-1zM16 14h1v1h-1zM14 16h1v1h-1zM12 16h1v1h-1zM10 16h1v1h-1zM8 16h1v1H8zM6 14h1v1H6zM4 12h1v1H4zM6 10h1v1H6zM10 10h1v1h-1zM12 10h1v1h-1zM12 12h1v1h-1zM10 12h1v1h-1zM9 8h1v1H9zM11 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM17 10h1v1h-1zM19 12h1v1h-1zM17 14h1v1h-1zM15 16h1v1h-1zM13 16h1v1h-1zM11 16h1v1h-1zM9 16h1v1H9zM7 14h1v1H7zM5 12h1v1H5zM7 10h1v1H7zM11 10h1v1h-1zM13 10h1v1h-1zM13 12h1v1h-1zM11 12h1v1h-1z"
    />
  </svg>
);

export default SvgNounsEyeSharp;

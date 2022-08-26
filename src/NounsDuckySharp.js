import * as React from "react";

const SvgNounsDuckySharp = ({ title, titleId, ...props }) => (
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
      d="M5 8h1v1H5zM5 9h1v1H5zM5 10h1v1H5zM6 8h1v1H6zM6 9h1v1H6zM6 10h1v1H6zM7 8h1v1H7zM7 9h1v1H7zM7 10h1v1H7zM8 11h1v1H8zM8 14h1v1H8zM8 12h1v1H8zM8 15h1v1H8zM8 13h1v1H8zM8 16h1v1H8zM9 11h1v1H9zM9 14h1v1H9zM9 12h1v1H9zM9 15h1v1H9zM9 13h1v1H9zM9 16h1v1H9zM10 11h1v1h-1zM10 14h1v1h-1zM10 12h1v1h-1zM10 15h1v1h-1zM10 13h1v1h-1zM10 16h1v1h-1zM11 11h1v1h-1zM11 14h1v1h-1zM11 12h1v1h-1zM11 15h1v1h-1zM11 13h1v1h-1zM11 16h1v1h-1zM12 11h1v1h-1zM12 14h1v1h-1zM12 12h1v1h-1zM12 15h1v1h-1zM12 13h1v1h-1zM12 16h1v1h-1zM13 11h1v1h-1zM13 14h1v1h-1zM13 12h1v1h-1zM13 15h1v1h-1zM13 13h1v1h-1zM13 16h1v1h-1zM14 11h1v1h-1zM14 14h1v1h-1zM14 12h1v1h-1zM14 15h1v1h-1zM14 13h1v1h-1zM14 16h1v1h-1zM15 11h1v1h-1zM15 14h1v1h-1zM15 12h1v1h-1zM15 15h1v1h-1zM15 13h1v1h-1zM15 16h1v1h-1zM16 11h1v1h-1zM16 14h1v1h-1zM16 12h1v1h-1zM16 15h1v1h-1zM16 13h1v1h-1zM16 16h1v1h-1zM17 11h1v1h-1zM17 12h1v1h-1zM17 13h1v1h-1zM18 11h1v1h-1zM18 12h1v1h-1zM18 13h1v1h-1zM19 11h1v1h-1zM19 12h1v1h-1zM19 13h1v1h-1zM11 8h1v1h-1zM11 9h1v1h-1zM11 10h1v1h-1zM12 8h1v1h-1zM12 9h1v1h-1zM12 10h1v1h-1zM13 8h1v1h-1zM13 9h1v1h-1zM13 10h1v1h-1zM14 8h1v1h-1zM14 9h1v1h-1zM14 10h1v1h-1zM15 8h1v1h-1zM15 9h1v1h-1zM15 10h1v1h-1zM16 8h1v1h-1zM16 9h1v1h-1zM16 10h1v1h-1z"
    />
  </svg>
);

export default SvgNounsDuckySharp;

import * as React from "react";

const SvgNouns1NSharp = ({ title, titleId, ...props }) => (
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
      d="M7 11h1v1H7zM8 11h1v1H8zM7 5h1v1H7zM7 4h1v1H7zM8 4h1v1H8zM8 5h1v1H8zM8 6h1v1H8zM8 7h1v1H8zM8 8h1v1H8zM8 9h1v1H8zM7 8h1v1H7zM7 9h1v1H7zM8 10h1v1H8zM7 10h1v1H7zM6 6h1v1H6zM5 6h1v1H5zM5 7h1v1H5zM6 7h1v1H6zM7 6h1v1H7zM7 7h1v1H7zM9 15h1v1H9zM10 14h1v1h-1zM11 13h1v1h-1zM12 12h1v1h-1v-1ZM12 13h1v1h-1v-1ZM11 12h1v1h-1v-1ZM13 11h1v1h-1zM14 11h1v1h-1zM14 10h1v1h-1zM13 10h1v1h-1zM15 9h1v1h-1zM16 9h1v1h-1zM16 8h1v1h-1zM15 8h1v1h-1zM10 15h1v1h-1zM9 14h1v1H9zM8 16h1v1H8zM8 17h1v1H8zM7 17h1v1H7zM7 16h1v1H7zM13 16h1v1h-1zM14 16h1v1h-1zM13 17h1v1h-1zM14 17h1v1h-1zM13 18h1v1h-1zM14 18h1v1h-1zM14 19h1v1h-1zM13 19h1v1h-1zM15 15h1v1h-1zM15 14h1v1h-1zM16 14h1v1h-1zM16 15h1v1h-1zM17 15h1v1h-1zM17 17h1v1h-1zM17 19h1v1h-1zM18 15h1v1h-1zM18 17h1v1h-1zM18 19h1v1h-1zM18 14h1v1h-1zM18 16h1v1h-1zM18 18h1v1h-1zM17 14h1v1h-1zM17 16h1v1h-1zM17 18h1v1h-1z"
    />
  </svg>
);

export default SvgNouns1NSharp;

import * as React from "react";

const SvgNounsWaveSharp = ({ title, titleId, ...props }) => (
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
      d="M7 7h1v1H7zM9 7h1v1H9zM5 9h1v1H5zM7 9h1v1H7zM9 11h1v1H9zM9 13h1v1H9zM7 15h1v1H7zM13 9h1v1h-1zM11 7h1v1h-1zM15 11h1v1h-1zM17 13h1v1h-1zM19 13h1v1h-1zM6 7h1v1H6zM8 7h1v1H8zM4 9h1v1H4zM6 9h1v1H6zM8 11h1v1H8zM8 13h1v1H8zM6 15h1v1H6zM12 9h1v1h-1zM10 7h1v1h-1zM14 11h1v1h-1zM16 13h1v1h-1zM18 13h1v1h-1zM6 8h1v1H6zM8 8h1v1H8zM4 10h1v1H4zM6 10h1v1H6zM8 12h1v1H8zM8 14h1v1H8zM6 16h1v1H6zM12 10h1v1h-1zM10 8h1v1h-1zM14 12h1v1h-1zM16 14h1v1h-1zM18 14h1v1h-1zM7 8h1v1H7zM9 8h1v1H9zM5 10h1v1H5zM7 10h1v1H7zM9 12h1v1H9zM9 14h1v1H9zM7 16h1v1H7zM13 10h1v1h-1zM11 8h1v1h-1zM15 12h1v1h-1zM17 14h1v1h-1zM19 14h1v1h-1z"
    />
  </svg>
);

export default SvgNounsWaveSharp;

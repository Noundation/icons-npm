import * as React from "react";

const SvgNounsAxeSharp = ({ title, titleId, ...props }) => (
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
      d="M6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM12 5h1v1h-1zM14 5h1v1h-1zM16 5h1v1h-1zM14 7h1v1h-1zM12 9h1v1h-1zM10 9h1v1h-1zM8 9h1v1H8zM8 11h1v1H8zM6 13h1v1H6zM6 11h1v1H6zM6 9h1v1H6zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM12 7h1v1h-1zM12 11h1v1h-1zM12 13h1v1h-1zM12 15h1v1h-1zM12 17h1v1h-1zM7 5h1v1H7zM9 5h1v1H9zM11 5h1v1h-1zM13 5h1v1h-1zM15 5h1v1h-1zM17 5h1v1h-1zM15 7h1v1h-1zM13 9h1v1h-1zM11 9h1v1h-1zM9 9h1v1H9zM9 11h1v1H9zM7 13h1v1H7zM7 11h1v1H7zM7 9h1v1H7zM7 7h1v1H7zM9 7h1v1H9zM11 7h1v1h-1zM13 7h1v1h-1zM13 11h1v1h-1zM13 13h1v1h-1zM13 15h1v1h-1zM13 17h1v1h-1zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM14 8h1v1h-1zM12 10h1v1h-1zM10 10h1v1h-1zM8 10h1v1H8zM8 12h1v1H8zM6 14h1v1H6zM6 12h1v1H6zM6 10h1v1H6zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM12 8h1v1h-1zM12 12h1v1h-1zM12 14h1v1h-1zM12 16h1v1h-1zM12 18h1v1h-1zM7 6h1v1H7zM9 6h1v1H9zM11 6h1v1h-1zM13 6h1v1h-1zM15 6h1v1h-1zM17 6h1v1h-1zM15 8h1v1h-1zM13 10h1v1h-1zM11 10h1v1h-1zM9 10h1v1H9zM9 12h1v1H9zM7 14h1v1H7zM7 12h1v1H7zM7 10h1v1H7zM7 8h1v1H7zM9 8h1v1H9zM11 8h1v1h-1zM13 8h1v1h-1zM13 12h1v1h-1zM13 14h1v1h-1zM13 16h1v1h-1zM13 18h1v1h-1z"
    />
  </svg>
);

export default SvgNounsAxeSharp;

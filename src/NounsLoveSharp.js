import * as React from "react";

const SvgNounsLoveSharp = ({ title, titleId, ...props }) => (
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
      d="M9 7h1v1H9zM15 7h1v1h-1zM17 9h1v1h-1zM15 9h1v1h-1zM13 9h1v1h-1zM11 9h1v1h-1zM7 9h1v1H7zM7 11h1v1H7zM9 11h1v1H9zM11 11h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM17 11h1v1h-1zM15 13h1v1h-1zM13 13h1v1h-1zM11 13h1v1h-1zM9 13h1v1H9zM11 15h1v1h-1zM13 15h1v1h-1zM8 7h1v1H8zM14 7h1v1h-1zM16 9h1v1h-1zM14 9h1v1h-1zM12 9h1v1h-1zM10 9h1v1h-1zM6 9h1v1H6zM6 11h1v1H6zM8 11h1v1H8zM10 11h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM16 11h1v1h-1zM14 13h1v1h-1zM12 13h1v1h-1zM10 13h1v1h-1zM8 13h1v1H8zM10 15h1v1h-1zM12 15h1v1h-1zM8 8h1v1H8zM14 8h1v1h-1zM16 10h1v1h-1zM14 10h1v1h-1zM12 10h1v1h-1zM10 10h1v1h-1zM6 10h1v1H6zM6 12h1v1H6zM8 12h1v1H8zM10 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM16 12h1v1h-1zM14 14h1v1h-1zM12 14h1v1h-1zM10 14h1v1h-1zM8 14h1v1H8zM10 16h1v1h-1zM12 16h1v1h-1zM9 8h1v1H9zM15 8h1v1h-1zM17 10h1v1h-1zM15 10h1v1h-1zM13 10h1v1h-1zM11 10h1v1h-1zM7 10h1v1H7zM7 12h1v1H7zM9 12h1v1H9zM11 12h1v1h-1zM13 12h1v1h-1zM15 12h1v1h-1zM17 12h1v1h-1zM15 14h1v1h-1zM13 14h1v1h-1zM11 14h1v1h-1zM9 14h1v1H9zM11 16h1v1h-1zM13 16h1v1h-1z"
    />
  </svg>
);

export default SvgNounsLoveSharp;

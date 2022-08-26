import * as React from "react";

const SvgNounsCheeseSharp = ({ title, titleId, ...props }) => (
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
      d="M6 7h1v1H6zM8 7h1v1H8zM8 9h1v1H8zM10 11h1v1h-1zM12 13h1v1h-1zM14 15h1v1h-1zM16 15h1v1h-1zM16 13h1v1h-1zM16 11h1v1h-1zM16 9h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM12 9h1v1h-1zM10 7h1v1h-1zM12 7h1v1h-1zM14 7h1v1h-1zM16 7h1v1h-1zM7 7h1v1H7zM9 7h1v1H9zM9 9h1v1H9zM11 11h1v1h-1zM13 13h1v1h-1zM15 15h1v1h-1zM17 15h1v1h-1zM17 13h1v1h-1zM17 11h1v1h-1zM17 9h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM13 9h1v1h-1zM11 7h1v1h-1zM13 7h1v1h-1zM15 7h1v1h-1zM17 7h1v1h-1zM6 8h1v1H6zM8 8h1v1H8zM8 10h1v1H8zM10 12h1v1h-1zM12 14h1v1h-1zM14 16h1v1h-1zM16 16h1v1h-1zM16 14h1v1h-1zM16 12h1v1h-1zM16 10h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM12 10h1v1h-1zM10 8h1v1h-1zM12 8h1v1h-1zM14 8h1v1h-1zM16 8h1v1h-1zM7 8h1v1H7zM9 8h1v1H9zM9 10h1v1H9zM11 12h1v1h-1zM13 14h1v1h-1zM15 16h1v1h-1zM17 16h1v1h-1zM17 14h1v1h-1zM17 12h1v1h-1zM17 10h1v1h-1zM13 12h1v1h-1zM15 12h1v1h-1zM13 10h1v1h-1zM11 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM17 8h1v1h-1z"
    />
  </svg>
);

export default SvgNounsCheeseSharp;

import * as React from "react";

const SvgNounsMarsfaceSharp = ({ title, titleId, ...props }) => (
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
      d="M15 7h1v1h-1zM15 9h1v1h-1zM15 11h1v1h-1zM15 13h1v1h-1zM15 15h1v1h-1zM15 17h1v1h-1zM13 17h1v1h-1zM11 17h1v1h-1zM9 17h1v1H9zM7 17h1v1H7zM13 15h1v1h-1zM13 13h1v1h-1zM13 11h1v1h-1zM13 9h1v1h-1zM9 9h1v1H9zM7 9h1v1H7zM11 13h1v1h-1zM16 7h1v1h-1zM16 9h1v1h-1zM16 11h1v1h-1zM16 13h1v1h-1zM16 15h1v1h-1zM16 17h1v1h-1zM14 17h1v1h-1zM12 17h1v1h-1zM10 17h1v1h-1zM8 17h1v1H8zM14 15h1v1h-1zM14 13h1v1h-1zM14 11h1v1h-1zM14 9h1v1h-1zM10 9h1v1h-1zM8 9h1v1H8zM12 13h1v1h-1zM16 6h1v1h-1zM16 8h1v1h-1zM16 10h1v1h-1zM16 12h1v1h-1zM16 14h1v1h-1zM16 16h1v1h-1zM14 16h1v1h-1zM12 16h1v1h-1zM10 16h1v1h-1zM8 16h1v1H8zM14 14h1v1h-1zM14 12h1v1h-1zM14 10h1v1h-1zM14 8h1v1h-1zM10 8h1v1h-1zM8 8h1v1H8zM12 12h1v1h-1zM15 6h1v1h-1zM15 8h1v1h-1zM15 10h1v1h-1zM15 12h1v1h-1zM15 14h1v1h-1zM15 16h1v1h-1zM13 16h1v1h-1zM11 16h1v1h-1zM9 16h1v1H9zM7 16h1v1H7zM13 14h1v1h-1zM13 12h1v1h-1zM13 10h1v1h-1zM13 8h1v1h-1zM9 8h1v1H9zM7 8h1v1H7zM11 12h1v1h-1z"
    />
  </svg>
);

export default SvgNounsMarsfaceSharp;

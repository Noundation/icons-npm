import * as React from "react";

const SvgNounsInsigniaSharp = ({ title, titleId, ...props }) => (
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
      d="M12 6h1v1h-1zM12 4h1v1h-1zM12 10h1v1h-1zM14 6h1v1h-1zM14 10h1v1h-1zM10 10h1v1h-1zM8 12h1v1H8zM8 14h1v1H8zM8 16h1v1H8zM10 18h1v1h-1zM12 18h1v1h-1zM14 18h1v1h-1zM16 16h1v1h-1zM16 14h1v1h-1zM16 12h1v1h-1zM12 8h1v1h-1zM10 14h1v1h-1zM10 6h1v1h-1zM11 6h1v1h-1zM11 4h1v1h-1zM11 10h1v1h-1zM13 6h1v1h-1zM13 10h1v1h-1zM9 10h1v1H9zM7 12h1v1H7zM7 14h1v1H7zM7 16h1v1H7zM9 18h1v1H9zM11 18h1v1h-1zM13 18h1v1h-1zM15 16h1v1h-1zM15 14h1v1h-1zM15 12h1v1h-1zM11 8h1v1h-1zM9 14h1v1H9zM9 6h1v1H9zM11 7h1v1h-1zM11 5h1v1h-1zM11 11h1v1h-1zM13 7h1v1h-1zM13 11h1v1h-1zM9 11h1v1H9zM7 13h1v1H7zM7 15h1v1H7zM7 17h1v1H7zM9 19h1v1H9zM11 19h1v1h-1zM13 19h1v1h-1zM15 17h1v1h-1zM15 15h1v1h-1zM15 13h1v1h-1zM11 9h1v1h-1zM9 15h1v1H9zM9 7h1v1H9zM12 7h1v1h-1zM12 5h1v1h-1zM12 11h1v1h-1zM14 7h1v1h-1zM14 11h1v1h-1zM10 11h1v1h-1zM8 13h1v1H8zM8 15h1v1H8zM8 17h1v1H8zM10 19h1v1h-1zM12 19h1v1h-1zM14 19h1v1h-1zM16 17h1v1h-1zM16 15h1v1h-1zM16 13h1v1h-1zM12 9h1v1h-1zM10 15h1v1h-1zM10 7h1v1h-1z"
    />
  </svg>
);

export default SvgNounsInsigniaSharp;

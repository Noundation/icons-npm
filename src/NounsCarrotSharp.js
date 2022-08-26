import * as React from "react";

const SvgNounsCarrotSharp = ({ title, titleId, ...props }) => (
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
      d="M11 6h1v1h-1zM13 8h1v1h-1zM15 6h1v1h-1zM13 10h1v1h-1zM11 10h1v1h-1zM11 12h1v1h-1zM9 12h1v1H9zM9 14h1v1H9zM7 16h1v1H7zM12 6h1v1h-1zM14 8h1v1h-1zM16 6h1v1h-1zM14 10h1v1h-1zM12 10h1v1h-1zM12 12h1v1h-1zM10 12h1v1h-1zM10 14h1v1h-1zM8 16h1v1H8zM11 7h1v1h-1zM13 9h1v1h-1zM15 7h1v1h-1zM13 11h1v1h-1zM11 11h1v1h-1zM11 13h1v1h-1zM9 13h1v1H9zM9 15h1v1H9zM7 17h1v1H7zM12 7h1v1h-1zM14 9h1v1h-1zM16 7h1v1h-1zM14 11h1v1h-1zM12 11h1v1h-1zM12 13h1v1h-1zM10 13h1v1h-1zM10 15h1v1h-1zM8 17h1v1H8z"
    />
  </svg>
);

export default SvgNounsCarrotSharp;

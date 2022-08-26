import * as React from "react";

const SvgNounsDollarSharp = ({ title, titleId, ...props }) => (
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
      d="M10 6h1v1h-1zM8 8h1v1H8zM10 8h1v1h-1zM12 8h1v1h-1zM14 8h1v1h-1zM12 6h1v1h-1zM8 10h1v1H8zM10 10h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM14 14h1v1h-1zM12 14h1v1h-1zM10 14h1v1h-1zM8 14h1v1H8zM10 16h1v1h-1zM12 16h1v1h-1zM11 6h1v1h-1zM9 8h1v1H9zM11 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM13 6h1v1h-1zM9 10h1v1H9zM11 10h1v1h-1zM13 12h1v1h-1zM15 12h1v1h-1zM15 14h1v1h-1zM13 14h1v1h-1zM11 14h1v1h-1zM9 14h1v1H9zM11 16h1v1h-1zM13 16h1v1h-1zM10 7h1v1h-1zM8 9h1v1H8zM10 9h1v1h-1zM12 9h1v1h-1zM14 9h1v1h-1zM12 7h1v1h-1zM8 11h1v1H8zM10 11h1v1h-1zM12 13h1v1h-1zM14 13h1v1h-1zM14 15h1v1h-1zM12 15h1v1h-1zM10 15h1v1h-1zM8 15h1v1H8zM10 17h1v1h-1zM12 17h1v1h-1zM11 7h1v1h-1zM9 9h1v1H9zM11 9h1v1h-1zM13 9h1v1h-1zM15 9h1v1h-1zM13 7h1v1h-1zM9 11h1v1H9zM11 11h1v1h-1zM13 13h1v1h-1zM15 13h1v1h-1zM15 15h1v1h-1zM13 15h1v1h-1zM11 15h1v1h-1zM9 15h1v1H9zM11 17h1v1h-1zM13 17h1v1h-1z"
    />
  </svg>
);

export default SvgNounsDollarSharp;

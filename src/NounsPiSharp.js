import * as React from "react";

const SvgNounsPiSharp = ({ title, titleId, ...props }) => (
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
      d="M16 14h1v1h-1zM14 12h1v1h-1zM14 10h1v1h-1zM16 8h1v1h-1zM14 8h1v1h-1zM12 8h1v1h-1zM10 8h1v1h-1zM8 8h1v1H8zM6 10h1v1H6zM10 10h1v1h-1zM10 12h1v1h-1zM10 14h1v1h-1zM17 14h1v1h-1zM15 12h1v1h-1zM15 10h1v1h-1zM17 8h1v1h-1zM15 8h1v1h-1zM13 8h1v1h-1zM11 8h1v1h-1zM9 8h1v1H9zM7 10h1v1H7zM11 10h1v1h-1zM11 12h1v1h-1zM11 14h1v1h-1zM17 15h1v1h-1zM15 13h1v1h-1zM15 11h1v1h-1zM17 9h1v1h-1zM15 9h1v1h-1zM13 9h1v1h-1zM11 9h1v1h-1zM9 9h1v1H9zM7 11h1v1H7zM11 11h1v1h-1zM11 13h1v1h-1zM11 15h1v1h-1zM16 15h1v1h-1zM14 13h1v1h-1zM14 11h1v1h-1zM16 9h1v1h-1zM14 9h1v1h-1zM12 9h1v1h-1zM10 9h1v1h-1zM8 9h1v1H8zM6 11h1v1H6zM10 11h1v1h-1zM10 13h1v1h-1zM10 15h1v1h-1z"
    />
  </svg>
);

export default SvgNounsPiSharp;

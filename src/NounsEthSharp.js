import * as React from "react";

const SvgNounsEthSharp = ({ title, titleId, ...props }) => (
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
      d="M11 6h1v1h-1zM9 10h1v1H9zM13 10h1v1h-1zM7 12h1v1H7zM9 14h1v1H9zM11 14h1v1h-1zM11 16h1v1h-1zM13 14h1v1h-1zM15 12h1v1h-1zM11 8h1v1h-1zM12 6h1v1h-1zM10 10h1v1h-1zM14 10h1v1h-1zM8 12h1v1H8zM10 14h1v1h-1zM12 14h1v1h-1zM12 16h1v1h-1zM14 14h1v1h-1zM16 12h1v1h-1zM12 8h1v1h-1zM11 7h1v1h-1zM9 11h1v1H9zM13 11h1v1h-1zM7 13h1v1H7zM9 15h1v1H9zM11 15h1v1h-1zM11 17h1v1h-1zM13 15h1v1h-1zM15 13h1v1h-1zM11 9h1v1h-1zM12 7h1v1h-1zM10 11h1v1h-1zM14 11h1v1h-1zM8 13h1v1H8zM10 15h1v1h-1zM12 15h1v1h-1zM12 17h1v1h-1zM14 15h1v1h-1zM16 13h1v1h-1zM12 9h1v1h-1z"
    />
  </svg>
);

export default SvgNounsEthSharp;

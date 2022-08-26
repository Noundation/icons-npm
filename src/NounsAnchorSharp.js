import * as React from "react";

const SvgNounsAnchorSharp = ({ title, titleId, ...props }) => (
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
      d="M11 7h1v1h-1zM11 9h1v1h-1zM9 9h1v1H9zM13 9h1v1h-1zM11 11h1v1h-1zM11 13h1v1h-1zM11 15h1v1h-1zM13 15h1v1h-1zM15 13h1v1h-1zM9 15h1v1H9zM7 13h1v1H7zM12 7h1v1h-1zM12 9h1v1h-1zM10 9h1v1h-1zM14 9h1v1h-1zM12 11h1v1h-1zM12 13h1v1h-1zM12 15h1v1h-1zM14 15h1v1h-1zM16 13h1v1h-1zM10 15h1v1h-1zM8 13h1v1H8zM11 8h1v1h-1zM11 10h1v1h-1zM9 10h1v1H9zM13 10h1v1h-1zM11 12h1v1h-1zM11 14h1v1h-1zM11 16h1v1h-1zM13 16h1v1h-1zM15 14h1v1h-1zM9 16h1v1H9zM7 14h1v1H7zM12 8h1v1h-1zM12 10h1v1h-1zM10 10h1v1h-1zM14 10h1v1h-1zM12 12h1v1h-1zM12 14h1v1h-1zM12 16h1v1h-1zM14 16h1v1h-1zM16 14h1v1h-1zM10 16h1v1h-1zM8 14h1v1H8z"
    />
  </svg>
);

export default SvgNounsAnchorSharp;

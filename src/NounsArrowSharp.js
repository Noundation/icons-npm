import * as React from "react";

const SvgNounsArrowSharp = ({ title, titleId, ...props }) => (
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
      d="M13 5h1v1h-1zM15 5h1v1h-1zM17 5h1v1h-1zM17 7h1v1h-1zM17 9h1v1h-1zM15 7h1v1h-1zM13 9h1v1h-1zM11 11h1v1h-1zM9 13h1v1H9zM7 13h1v1H7zM9 15h1v1H9zM7 15h1v1H7zM5 15h1v1H5zM7 17h1v1H7zM14 5h1v1h-1zM16 5h1v1h-1zM18 5h1v1h-1zM18 7h1v1h-1zM18 9h1v1h-1zM16 7h1v1h-1zM14 9h1v1h-1zM12 11h1v1h-1zM10 13h1v1h-1zM8 13h1v1H8zM10 15h1v1h-1zM8 15h1v1H8zM6 15h1v1H6zM8 17h1v1H8zM13 6h1v1h-1zM15 6h1v1h-1zM17 6h1v1h-1zM17 8h1v1h-1zM17 10h1v1h-1zM15 8h1v1h-1zM13 10h1v1h-1zM11 12h1v1h-1zM9 14h1v1H9zM7 14h1v1H7zM9 16h1v1H9zM7 16h1v1H7zM5 16h1v1H5zM7 18h1v1H7zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM18 8h1v1h-1zM18 10h1v1h-1zM16 8h1v1h-1zM14 10h1v1h-1zM12 12h1v1h-1zM10 14h1v1h-1zM8 14h1v1H8zM10 16h1v1h-1zM8 16h1v1H8zM6 16h1v1H6zM8 18h1v1H8z"
    />
  </svg>
);

export default SvgNounsArrowSharp;

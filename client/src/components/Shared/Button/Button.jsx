import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button({
  children,
  variant = "primary",
  to,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
}) {
  const classes = [
    "elnor-btn",
    `elnor-btn--${variant}`,
    fullWidth ? "elnor-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled}
      >
        <span className="elnor-btn-text">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="elnor-btn-text">
        {children}
      </span>
    </button>
  );
}

export default Button;
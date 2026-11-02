import "./Text.css";

function Text({
  children,
  variant = "body",
  className = "",
}) {

  return (
    <p
      className={`elnor-text elnor-text-${variant} ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
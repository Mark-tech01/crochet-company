import "./Text.css";

function Text({
  children,
  variant = "body",
  className = "",
}) {

  return (
    <p
      className={`kovv-text kovv-text-${variant} ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
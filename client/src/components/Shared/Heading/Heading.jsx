import "./Heading.css";

function Heading({
  level = 2,
  children,
  className = "",
}) {

  const Tag = `h${level}`;

  return (
    <Tag
      className={`kovv-heading kovv-heading-${level} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Heading;
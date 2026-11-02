import "./Heading.css";

function Heading({
  level = 2,
  children,
  className = "",
}) {

  const Tag = `h${level}`;

  return (
    <Tag
      className={`elnor-heading elnor-heading-${level} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Heading;
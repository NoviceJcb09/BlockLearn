const Icon = ({ name, size = 40, className = "", color = "currentColor" }) => {
  return (
    <svg width={size} height={size} className={className} style={{ color }}>
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;

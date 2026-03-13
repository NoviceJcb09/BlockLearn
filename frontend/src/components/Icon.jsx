const Icon = ({ name, size = 40, className = "" }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;

import sprite from './icons.svg';

const Iconsvg = ({ iconName, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Iconsvg;
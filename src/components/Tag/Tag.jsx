import css from './Tag.module.css';
import Iconsvg from '../Icons/Icons';

const Tag = ({ iconName, text }) => {

    let displayText = text.includes("airConditioner")
    ? text.replace("airConditioner", "Air Conditioner")
    : text;


  return (
    <div className={css.tag}>
      <div className={css.tagIcon}>
        <Iconsvg className={css.tagIcon} iconName={iconName} />
      </div>
      <div className={css.tagText}>{displayText}</div>
    </div>
  );
};

export default Tag;

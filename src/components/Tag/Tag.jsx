import css from './Tag.module.css';
import Iconsvg from '../Icons/Icons';

const Tag = ({ iconName, text }) => {
  return (
    <div className={css.tag}>
      <div className={css.tagIcon}>
        <Iconsvg className={css.tagIcon} iconName={iconName} />
      </div>
      <div className={css.tagText}>
        {text}
      </div>
    </div>
  );
};

export default Tag;

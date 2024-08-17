import Tag from '../../components/Tag/Tag';
import css from './TagList.module.css';

const TagList = ({ details }) => {
  const iconsWithNumbers = ['beds', 'hob', 'adults', 'airConditioner'];

  return (
    <div className={css.tags}>
      {Object.keys(details).map((key) => {
        if (details[key] !== 0) {
          const text = iconsWithNumbers.includes(key)
            ? `${details[key]} ${key}` 
            : key; 
          
          return (
            <Tag
              key={key}
              iconName={key}
              text={text}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TagList;

import Tag from '../../components/Tag/Tag';
import css from './TagList.module.css';

const TagList = ({ details, adults, engine, transmission }) => {
  const tags = [
    { key: 'adults', value: adults, label: `${adults} adults` },
    { key: 'engine', value: details.engine, label: 'Petrol' },
    { key: 'transmission', value: details.transmission, label: details.transmission },
    { key: 'kitchen', value: details.kitchen, label: 'kitchen' },
    { key: 'beds', value: details.beds, label: `${details.beds} beds` },
    { key: 'airConditioner', value: details.airConditioner, label: 'airConditioner' }
  ];

  return (
    <div className={css.tags}>
      {tags.map(({ key, value, label }) => (
        value !== 0 && (
          <Tag
            key={key}
            iconName={key}
            text={label}
          />
        )
      ))}
    </div>
  );
};

export default TagList;

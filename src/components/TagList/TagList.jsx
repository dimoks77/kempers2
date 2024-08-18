import Tag from '../../components/Tag/Tag';
import css from './TagList.module.css';

const TagList = ({ details, adults }) => {
  const tags = [
    { key: 'adults', value: adults, label: `${adults} adults`, iconName: 'adults' },
    { key: 'engine', value: details.engine, label: 'Petrol', iconName: 'Petrol' },
    { key: 'transmission', value: details.transmission, label: 'Automatic', iconName: 'Automatic' },
    { key: 'kitchen', value: details.kitchen, label: 'Kitchen', iconName: 'Kitchen' },
    { key: 'beds', value: details.beds, label: `${details.beds} beds`, iconName: 'beds' },
    { key: 'airConditioner', value: details.airConditioner, label: 'AC', iconName: 'AC' }
  ];

  return (
    <div className={css.tags}>
      {tags
        .filter(tag => tag.value !== "0")  
        .map(tag => (
          <Tag key={tag.key} iconName={tag.iconName} text={tag.label} />
        ))}
    </div>
  );
};

export default TagList;

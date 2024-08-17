import Car from "../Car/Car";
import css from "./CarList.module.css";

const CarList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item._id}>
            <Car item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;

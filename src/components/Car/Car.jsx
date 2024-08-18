import css from "./Car.module.css";
import { useState } from "react";
import Iconsvg from "../Icons/Icons";
import { useDispatch } from "react-redux";
import TagList from "../TagList/TagList";
import Modal from "../Modal/Modal";

const Car = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.card}>
      <div className={css.cover}>
        <img className={css.img} src={item.gallery[0]} alt="{item.name}" />
      </div>

      <div className={css.info}>
        <div className={css.titlePrice}>
          <div className={css.title}>{item.name}</div>
          <div className={css.priceIconWrapper}>
            <div className={css.price}>€{item.price}.00</div>
            <div className={css.favorites}>
              <Iconsvg className={css.favoritIcon} iconName="heart" />
            </div>
          </div>
        </div>
        <div className={css.ratingLocation}>
          <Iconsvg className={css.starIcon} iconName="star" />
          <div className={css.rating}>
            {item.rating} ({item.reviews.length} Reviews)
          </div>
          <Iconsvg className={css.locationIcon} iconName="location" />
          <div className={css.location}>Kyiv, Ukraine</div>
        </div>
        <div className={css.desc}>{item.description}</div>
        <TagList
          details={item.details}
          adults={item.adults}
          engine={item.engine}
          transmission={item.transmission}
        />
        <button type="button" className={css.showMore} onClick={openModal}>
          Show More
        </button>
      </div>


      {showModal && (
        <Modal item={item} onClose={closeModal} />
      )}


    </div>
  );
};

export default Car;

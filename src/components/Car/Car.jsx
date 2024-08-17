import css from "./Car.module.css";
import { useState } from "react";
import Iconsvg from "../Icons/Icons";
import img from "../../images/car1.jpg"
import { useDispatch } from "react-redux";

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
            <div className={css.rating}>{item.rating} ({item.reviews.length} Reviews)</div>
            <Iconsvg className={css.locationIcon} iconName="location" />
            <div className={css.location}>Kyiv, Ukraine</div>
          </div>
          <div className={css.desc}>{item.description}</div>
          <div className={css.tags}>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="users" />
              </div>
              <div className={css.tagText}>
                {`${item?.adults || 'N/A'} adults`}
              </div>
            </div>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="pd" />
              </div>
              <div className={css.tagText}>{item?.transmission || 'N/A'}</div>
            </div>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="petrol" />
              </div>
              <div className={css.tagText}>{item?.engine || 'N/A'}</div>
            </div>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="knife" />
              </div>
              <div className={css.tagText}>
                {`${item?.details?.kitchen || 'N/A'} kitchen`}
              </div>
            </div>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="bed" />
              </div>
              <div className={css.tagText}>
                {`${item?.details?.beds || 'N/A'} beds`}
              </div>
            </div>
            <div className={css.tag}>
              <div className={css.tagIcon}>
                <Iconsvg className={css.tagIcon} iconName="wind" />
              </div>
              <div className={css.tagText}>
                {`${item?.details?.airConditioner || 'N/A'} AC`}
              </div>
            </div>
          </div>
          <button type="submit" className={css.showMore}>
            Show More
          </button>
        </div>
      </div>
    );
  };
  
  export default Car;

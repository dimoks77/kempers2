import { useState, useEffect } from "react";
import css from "./Modal.module.css";
import Iconsvg from "../Icons/Icons";
import ModalForm from "../ModalForm/ModalForm";

const Modal = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState("features"); // Хранение активной вкладки

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className={css.modalOverlay} onClick={onClose}></div>
      <div className={css.modal}>
        <div className={css.modalContentWrapper}>
          <div className={css.modalContent}>
            <div className={css.header}>
              <div className={css.title}>{item.name}</div>
              <button onClick={onClose}>
                <Iconsvg className={css.closeIcon} iconName="close" />
              </button>
            </div>
            <div className={css.ratingLocation}>
              <Iconsvg className={css.starIcon} iconName="star" />
              <div className={css.rating}>
                {item.rating} ({item.reviews.length} Reviews)
              </div>
              <Iconsvg className={css.locationIcon} iconName="location" />
              <div className={css.location}>Kyiv, Ukraine</div>
            </div>
            <div className={css.price}>€{item.price}.00</div>
            <div className={css.gallery}>
              <img className={css.img} src={item.gallery[0]} alt={item.name} />
              <img className={css.img} src={item.gallery[1]} alt={item.name} />
              <img className={css.img} src={item.gallery[2]} alt={item.name} />
            </div>
            <div className={css.desc}>{item.description}</div>

            <div className={css.featuresReviews}>
              <p
                className={activeTab === "features" ? css.activeTab : ""}
                onClick={() => setActiveTab("features")}
              >
                Features
              </p>
              <p
                className={activeTab === "reviews" ? css.activeTab : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </p>
            </div>

            <hr className={css.line} />

            <div className={css.tabContent}>
              {activeTab === "features" && (
                <div className={css.tabs}>
                <div className={css.featuresTab}>
                      <p>features content</p>
                    </div>
                    <ModalForm />
                </div>
              )}
              {activeTab === "reviews" && (
                <div className={css.tabs}>
                    <div className={css.reviewsTab}>
                      <p>reviews content</p>
                    </div>
                    <ModalForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

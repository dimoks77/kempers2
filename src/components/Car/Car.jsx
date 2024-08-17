import css from "./Car.module.css";
import Iconsvg from "../Icons/Icons";
import img from "../../images/car1.jpg"

const Car = () => {
    return (
      <div className={css.card}>
        <div className={css.cover}><img src={img} alt="Car" /></div>
        
        <div className={css.info}>
            <div className={css.titlePrice}>
                    <div className={css.title}>Mavericks</div>
                    <div className={css.priceIconWrapper}>
                        <div className={css.price}>€8000.00</div>
                        <div className={css.favorites}><Iconsvg className={css.favoritIcon} iconName="heart" /></div>
                    </div>
            </div>
            <div className={css.ratingLocation}>
                <Iconsvg className={css.starIcon} iconName="star" />    
                <div className={css.rating}>4.4(2 Reviews)</div>
                <Iconsvg className={css.locationIcon} iconName="location" />    
                <div className={css.location}>Kyiv, Ukraine</div>
            </div>
            <div className={css.desc}>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads.</div>
            <div className={css.tags}>
            <div className={css.tag}>
                        <div className={css.tagIcon}><Iconsvg className={css.favoritIcon} iconName="users" /></div>
                        <div className={css.tagText}>2 adults</div>
                    </div>
                    <div className={css.tag}>
                        <div className={css.tagIcon}><Iconsvg className={css.favoritIcon} iconName="users" /></div>
                        <div className={css.tagText}>2 adults</div>
                    </div>
                    <div className={css.tag}>
                        <div className={css.tagIcon}><Iconsvg className={css.favoritIcon} iconName="users" /></div>
                        <div className={css.tagText}>2 adults</div>
                    </div>
                    <div className={css.tag}>
                        <div className={css.tagIcon}><Iconsvg className={css.favoritIcon} iconName="users" /></div>
                        <div className={css.tagText}>2 adults</div>
                    </div>                    
                    <div className={css.tag}>
                        <div className={css.tagIcon}><Iconsvg className={css.favoritIcon} iconName="users" /></div>
                        <div className={css.tagText}>2 adults</div>
                    </div>      
            </div>
            <button type="submit" className={css.showMore}>Show More</button>
        </div>
            
        
      </div>
    );
  };
  
  export default Car;
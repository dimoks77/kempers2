import React from "react";
import css from "./Sidebar.module.css";
import Iconsvg from "../Icons/Icons"; // Убедитесь, что путь правильный

const Sidebar = () => {
  return (
    <form className={css.searchForm}>
      <div className={css.locationGroup}>
        <p className={css.label}>Location:</p>
        <div className={css.inputWrapper}>
         <input
            className={css.searchInput}
            type="text"
            id="location"
            name="location"
            placeholder="City"
          />
          <Iconsvg className={css.icons} iconName="location" />
       </div>
      </div>

      <div className={css.filters}>
        <p className={css.label}>Filters</p>
        <h3>Vehicle Equipment</h3>
        <hr />
        <div className={css.filtersGroup}>
          <label>
            <input type="checkbox" name="equipment" value="AC" />
            AC
          </label>
          <label>
            <input type="checkbox" name="equipment" value="Automatic" />
            Automatic
          </label>
          <label>
            <input type="checkbox" name="equipment" value="Kitchen" />
            Kitchen
          </label>
          <label>
            <input type="checkbox" name="equipment" value="TV" />
            TV
          </label>
          <label>
            <input type="checkbox" name="equipment" value="Shower/WC" />
            Shower/WC
          </label>
        </div>
      </div>

      <div className={css.type}>
        <h3>Vehicle Type</h3>
        <hr />
        <div className={css.typeGroup}>
          <label>
            <input type="checkbox" name="vehicle_type" value="Van" />
            Van
          </label>
          <label>
            <input type="checkbox" name="vehicle_type" value="Fully Integrated" />
            Fully Integrated
          </label>
          <label>
            <input type="checkbox" name="vehicle_type" value="Alcove" />
            Alcove
          </label>
        </div>
      </div>

      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default Sidebar;

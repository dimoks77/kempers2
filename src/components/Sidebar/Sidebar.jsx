import css from "./Sidebar.module.css";
import Iconsvg from "../Icons/Icons";

const Sidebar = () => {
  return (
    <form className={css.searchForm}>
      <div className={css.locationGroup}>
        <p className={css.label}>Location:</p>
        <div className={css.inputWrapper}>
          <input className={css.searchInput} type="text" id="location" name="location" placeholder="City" />
          <Iconsvg className={css.icons} iconName="location" />
        </div>
      </div>

      <div className={css.filters}>
        <p className={css.label}>Filters</p>
        <h3 className={css.title}>Vehicle Equipment</h3>
        <hr className={css.line} />
        <div className={css.filtersGroup}>
          <label className={css.filterItem}>
            <input type="checkbox" name="equipment" value="AC" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckbox} iconName="AC" />
              <p>AC</p>
            </div>
          </label>

          <label className={css.filterItem}>
            <input type="checkbox" name="equipment" value="Automatic" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckbox} iconName="Automatic" />
              <p>Automatic</p>
            </div>
          </label>
          <label className={css.filterItem}>
            <input type="checkbox" name="equipment" value="Kitchen" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckbox} iconName="Kitchen" />
              <p>Kitchen</p>
            </div>
          </label>
          <label className={css.filterItem}>
            <input type="checkbox" name="equipment" value="TV" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckbox} iconName="TV" />
              <p>TV</p>
            </div>
          </label>
          <label className={css.filterItem}>
            <input type="checkbox" name="equipment" value="Shower/WC" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckbox} iconName="Shower" />
              <p>Shower/WC</p>
            </div>
          </label>
        </div>
      </div>

      <div className={css.type}>
        <h3 className={css.title}>Vehicle Type</h3>
        <hr className={css.line} />
        <div className={css.typeGroup}>
          <label className={css.typeItem}>
            <input type="radio" name="vehicle_type" value="Van" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckboxType} iconName="cemperwd" />
              <p>Van</p>
            </div>
          </label>
          <label className={css.typeItem}>
            <input type="radio" name="vehicle_type" value="Fully Integrated" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckboxType} iconName="cemperww" />
              <p>Fully Integrated</p>
            </div>
          </label>
          <label className={css.typeItem}>
            <input type="radio" name="vehicle_type" value="Alcove" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <Iconsvg className={css.iconsCheckboxType} iconName="cemper" />
              <p>Alcove</p>
            </div>
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

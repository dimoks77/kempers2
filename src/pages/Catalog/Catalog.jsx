import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import css from "./Catalog.module.css";

const Catalog = () => {
    return (
        <div className={css.container}>
            <Sidebar />
            <Main />
        </div>
    );
  };
  
  export default Catalog;
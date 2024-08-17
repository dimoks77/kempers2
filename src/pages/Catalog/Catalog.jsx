import Sidebar from "../../components/Sidebar/Sidebar";
import css from "./Catalog.module.css";
import CarList from "../../components/CarList/CarList";
import { getCarsError, getCarsStatus, selectFilteredCars } from "../../redux/selectors";


import { fetchCars } from "../../redux/operations";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Catalog = () => {

    const dispatch = useDispatch();
    const loading = useSelector(getCarsStatus);
    const error = useSelector(getCarsError);

    const [page, setPage] = useState(1);

    const onLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      };

      const items = useSelector(selectFilteredCars);
      const visible = items.length > 0;
      
      useEffect(() => {
        dispatch(fetchCars(page));
      }, [dispatch, page]);

    return (
        

        <>
            
        <div className={css.container}> 
            <Sidebar />
            <CarList items={items}/>
        </div>
        </>
    );
  };
  
  export default Catalog;
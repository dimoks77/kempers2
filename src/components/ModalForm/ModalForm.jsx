import css from './ModalForm.module.css';
import Iconsvg from '../Icons/Icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ModalForm = () => {
  return (
    <div className={css.modalForm}>
            <div  className={css.modalTextWrap}>
                <p className={css.modalFormTitle}>Book your campervan now</p>
                <p className={css.modalFormDesc}>Stay connected! We are always ready to help you.</p>
           </div>

           


            <button className={css.modalFormBtn} type="submit">Send</button>

    </div>
  );
};

export default ModalForm;

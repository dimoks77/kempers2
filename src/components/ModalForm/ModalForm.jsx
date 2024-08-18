import css from "./ModalForm.module.css";
import Iconsvg from "../Icons/Icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  bookingDate: Yup.date().required("Required"),
  comment: Yup.string(),
});

const ModalForm = () => {
  return (
    <div className={css.modalForm}>
      <div className={css.modalTextWrap}>
        <p className={css.modalFormTitle}>Book your campervan now</p>
        <p className={css.modalFormDesc}>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <Field name="name" type="text" placeholder="Name" className={css.inputField} />
              {errors.name && touched.name && <div className={css.error}>{errors.name}</div>}
            </div>

            <div className={css.formGroup}>
              <Field name="email" type="email" placeholder="Email" className={css.inputField} />
              {errors.email && touched.email && <div className={css.error}>{errors.email}</div>}
            </div>

            <div className={css.formGroup}>
              <div className={css.bookingDateWrapper}>
                <Field
                  name="bookingDate"
                  type="text"
                  placeholder="Booking date"
                  className={`${css.inputField} ${css.inputFieldWithIcon}`}
                />
                <Iconsvg className={css.icon} iconName="calendar" />
              </div>
              {errors.bookingDate && touched.bookingDate && (
                <div className={css.error}>{errors.bookingDate}</div>
              )}
            </div>

            <div className={css.formGroup}>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={`${css.inputField} ${css.textareaField}`}
              />
              {errors.comment && touched.comment && <div className={css.error}>{errors.comment}</div>}
            </div>

            <button type="submit" className={css.modalFormBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalForm;

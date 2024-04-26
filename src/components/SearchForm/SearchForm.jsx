import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    searchValue: "",
  };
  const SearchFormSchema = Yup.object().shape({
    searchValue: Yup.string().max(50, "Too Long!"),
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SearchFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <Field className={css.input} type="text" name="searchValue" />
          <ErrorMessage name="searchValue" component="span" />
        </label>

        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;

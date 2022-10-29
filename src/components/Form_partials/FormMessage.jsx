import { Field } from 'formik';

const FormMessage = () => {
  return (
    <>
      <Field
        as="textarea"
        name="message"
        type="text"
        className="form-textarea"
      />
      <span className="form-label">Message *</span>
    </>
  );
};

export default FormMessage;

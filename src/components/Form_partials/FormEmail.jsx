import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

const FormEmail = () => {
  return (
    <Field name="email">
      {({ field, meta }) => (
        <>
          <input
            type="text"
            name="email"
            className="form-input"
            required={true}
            {...field}
          />
          <span className="form-label">Email *</span>
          {meta.error ? (
            <span className="form-error">{meta.error}</span>
          ) : (
            <span className="form-error">&nbsp;</span>
          )}
          <CheckMark error={meta.error} touched={meta.touched} />
        </>
      )}
    </Field>
  );
};

export default FormEmail;

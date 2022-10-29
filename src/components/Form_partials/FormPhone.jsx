import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

const FormPhone = () => {
  return (
    <Field name="phone">
      {({ field, meta }) => (
        <>
          <input
            type="text"
            name="phone"
            className="form-input"
            required={true}
            {...field}
          />
          <span className="form-label">Phone *</span>
          <CheckMark error={meta.error} touched={meta.touched} />
          {meta.error ? (
            <span className="form-error">{meta.error}</span>
          ) : (
            <span className="form-error">&nbsp;</span>
          )}
        </>
      )}
    </Field>
  );
};

export default FormPhone;

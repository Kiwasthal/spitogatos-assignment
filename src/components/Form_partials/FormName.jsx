import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

const FormFullName = () => {
  return (
    <Field className="wrapper" name="fullname">
      {({ field, meta }) => (
        <>
          <input
            type="text"
            name="fullname"
            className="form-input"
            required={true}
            {...field}
          />
          <span className="form-label">Full Name *</span>
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

export default FormFullName;

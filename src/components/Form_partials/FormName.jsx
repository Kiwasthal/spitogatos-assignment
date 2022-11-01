import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

const FormFullName = () => {
  return (
    <Field className="wrapper" name="fullname">
      {({ field, meta }) => (
        <>
          <input
            aria-label="Your full name"
            type="text"
            name="fullname"
            className={`form-input ${
              meta.touched && meta.error ? 'invalid' : ''
            }`}
            required={true}
            spellCheck="false"
            {...field}
          />
          <span
            aria-hidden="true"
            className={`form-label ${
              meta.touched && meta.error ? 'invalid' : ''
            }`}
          >
            Full Name *
          </span>
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

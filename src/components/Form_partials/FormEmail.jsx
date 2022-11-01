import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

const FormEmail = () => {
  return (
    <Field name="email">
      {({ field, meta }) => (
        <>
          <input
            aria-label="Your phone"
            onClick={() => console.log(meta)}
            type="text"
            name="email"
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
            Email *
          </span>
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

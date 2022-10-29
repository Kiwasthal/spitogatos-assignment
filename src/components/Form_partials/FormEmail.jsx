import { Field } from 'formik';

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
          {!meta.error && meta.touched ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#4B00FF"
              className="form-checkmark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : null}
        </>
      )}
    </Field>
  );
};

export default FormEmail;

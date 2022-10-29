import { Field } from 'formik';

const FormCategories = () => {
  return (
    <>
      <Field name="category">
        {({ field, meta }) => (
          <>
            <div className="options-wrapper">
              <select
                type="text"
                name=""
                className="form-input"
                required={true}
                {...field}
              >
                <option value="">one</option>
              </select>
              <span className="form-label">Category</span>
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
              {meta.error ? (
                <span className="form-error">{meta.error}</span>
              ) : (
                <span className="form-error">&nbsp;</span>
              )}
            </div>
          </>
        )}
      </Field>
      <Field name="subcategory">
        {({ field, meta }) => (
          <>
            <div className="options-wrapper">
              <select
                type="text"
                name=""
                className="form-input"
                required={true}
                {...field}
              />
              <span className="form-label">Category</span>
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
              {meta.error ? (
                <span className="form-error">{meta.error}</span>
              ) : (
                <span className="form-error">&nbsp;</span>
              )}
            </div>
          </>
        )}
      </Field>
    </>
  );
};

export default FormCategories;

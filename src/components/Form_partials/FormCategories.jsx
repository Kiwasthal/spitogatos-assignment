import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';
import useFetch from '../../hooks/useFetch';

const FormCategories = () => {
  const { data, loading, error } = useFetch(
    'https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b'
  );

  /**
   * Proper error handling & loading skeletons can be managed here
   */

  if (error) return;
  if (loading) return;

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
                {data.map((option, index) => (
                  <option key={index}>{option.name}</option>
                ))}
              </select>
              <span className="form-label">Category</span>
              <CheckMark error={meta.error} touched={meta.touched} />
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

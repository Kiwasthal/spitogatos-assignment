import { Field } from 'formik';
import { useState } from 'react';
import CheckMark from '../../assets/Chekmark';
import useFetch from '../../hooks/useFetch';

const FormCategories = () => {
  //By default we set the selected value to display all subcategories
  const [selected, setSelected] = useState('All');

  //Basic hook handling fetching states
  const { data, loading, error } = useFetch(
    'https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b'
  );

  //Handling the change on the selected element

  const handleChange = e => setSelected(e.target.value);

  // Gets the necessary subcategory data based on the selected value
  const displaySubCategories = () =>
    //Map over the categories
    data.map(category => {
      //If the selected value is all we want to return all the relevant subcategories
      if (selected === 'All')
        return category.subCategories
          ? category.subCategories.map(subcategory => (
              <option key={subcategory.name}>{subcategory.name}</option>
            ))
          : null;
      //If the selected value is not all, we only return the subcategory matching to the selected value
      else if (selected === category.name)
        return (
          category.subCategories &&
          category.subCategories.map(subcategory => (
            <option key={subcategory.name}>{subcategory.name}</option>
          ))
        );
    });

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
                value={selected ? selected : 'All'}
                onChange={handleChange}
              >
                {data.map((option, index) => {
                  return (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  );
                })}
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
              >
                {displaySubCategories()}
              </select>
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

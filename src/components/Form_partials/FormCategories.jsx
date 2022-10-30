import { Field } from 'formik';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

//Control props provides the selected value of the category field

const FormCategories = ({ control }) => {
  //By default we set the selected value to display all subcategories
  const [selected, setSelected] = useState('All');

  //Basic hook handling fetching states
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
      <Field as="select" name="category" className="form-input">
        {data.map((option, index) => {
          return (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </Field>

      <Field name="subcategory" as="select" className="form-input">
        {/* // Gets the necessary subcategory data based on the selected value */}
        {data.map(category => {
          //If the selected value is all we want to return all the relevant subcategories
          if (control === 'All')
            return category.subCategories
              ? category.subCategories.map(subcategory => (
                  <option key={subcategory.name}>{subcategory.name}</option>
                ))
              : null;
          //If the selected value is not all, we only return the subcategory matching to the selected value
          else if (control === category.name) {
            console.log(true);
            return (
              category.subCategories &&
              category.subCategories.map(subcategory => (
                <option key={subcategory.name}>{subcategory.name}</option>
              ))
            );
          }
        })}
      </Field>
    </>
  );
};

export default FormCategories;

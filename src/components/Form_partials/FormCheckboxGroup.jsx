import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const CheckBox = ({ labeltext }) => {
  // const [checked, setChecked] = useState(false);

  // const handleChange = () => setChecked(!checked);

  return (
    <label className="container">
      {labeltext}
      <Field
        id={labeltext}
        type="checkbox"
        value={labeltext}
        name="checkboxOption"
      />
      <span className="checkmark"></span>
    </label>
  );
};

const FormCheckBoxGroup = ({ control }) => {
  return (
    <div className="form-checkbox">
      <CheckBox labeltext={'Option 1'} />
      <CheckBox labeltext={'Option 2'} />
      <ErrorMessage name="checkboxOption" />
    </div>
  );
};

export default FormCheckBoxGroup;

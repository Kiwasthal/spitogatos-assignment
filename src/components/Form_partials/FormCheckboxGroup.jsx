import { Field, ErrorMessage } from 'formik';

const CheckBox = ({ labeltext }) => {
  //Grouping the checkbox options with the name attribute (checkboxOption)

  return (
    <label className="container">
      {labeltext}
      <Field
        id={labeltext}
        type="checkbox"
        value={labeltext}
        name="checkboxOption"
        aria-checked="false"
      />
      <span className="checkmark"></span>
    </label>
  );
};

const FormCheckBoxGroup = () => {
  return (
    <div className="form-checkbox">
      <CheckBox labeltext={'Option 1'} />
      <CheckBox labeltext={'Option 2'} />
      <ErrorMessage name="checkboxOption" className="error" />
    </div>
  );
};

export default FormCheckBoxGroup;

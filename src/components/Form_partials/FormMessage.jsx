import { Field } from 'formik';
import CheckMark from '../../assets/Chekmark';

//Control props gives us access to the value inputted in the textarea field

const FormMessage = ({ control }) => {
  return (
    <>
      <Field
        aria-label="Your message"
        as="textarea"
        name="message"
        type="text"
        className="form-textarea"
        maxLength="100"
        spellCheck="false"
      />
      <span aria-hidden="true" className="form-label">
        Message *
      </span>
      {/* Getting the available characters (all chars - typed chars) */}
      <p className="form-error">{100 - control.length}</p>
    </>
  );
};

export default FormMessage;

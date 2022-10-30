import { Field } from 'formik';
import { useState } from 'react';
import CheckMark from '../../assets/Chekmark';

//Control props gives us access to the value inputted in the textarea field

const FormMessage = ({ control }) => {
  return (
    <>
      <Field
        as="textarea"
        name="message"
        type="text"
        className="form-textarea"
        maxlength="100"
      />
      <span className="form-label">Message *</span>
      {/* Getting the available characters (all chars - typed chars) */}
      <p className="form-error">{100 - control.length}</p>
    </>
  );
};

export default FormMessage;

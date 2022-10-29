import Map from '../assets/Contact_Map.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as YUP from 'yup';

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
};

const validationSchema = YUP.object({
  fullname: YUP.string().required('Full Name is required'),
  email: YUP.string().email().required('Email is required'),
  phone: YUP.number().required('Phone is required'),
  message: YUP.string().required('Message is required'),
});

const ContactSection = () => {
  return (
    <section className="contact">
      {/* Map */}
      <img className="contact-map" src={Map} alt="" />
      <div className="contact-badge"></div>
      <div className="contact-formwrapper">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={SendEmail}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {() => (
            <Form>
              <div className="form">
                <Field className="wrapper" name="fullname">
                  {({ field, meta }) => (
                    <>
                      <input
                        type="text"
                        name="fullname"
                        className="form-input"
                        required={true}
                        {...field}
                      />
                      <span className="form-label">Full Name *</span>
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
                    </>
                  )}
                </Field>
              </div>
              <div className="form">
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
              </div>
              <div className="form">
                <Field name="phone">
                  {({ field, meta }) => (
                    <>
                      <input
                        type="text"
                        name="phone"
                        className="form-input"
                        required={true}
                        {...field}
                      />
                      <span className="form-label">Phone *</span>
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
                    </>
                  )}
                </Field>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;

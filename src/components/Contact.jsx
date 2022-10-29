import Map from '../assets/Contact_Map.png';
import { Formik, Form } from 'formik';
import * as YUP from 'yup';
import FormMessage from './Form_partials/FormMessage';
import FormFullName from './Form_partials/FormName';
import FormEmail from './Form_partials/FormEmail';
import FormPhone from './Form_partials/FormPhone';
import FormCategories from './Form_partials/FormCategories';

/*
--- Initialize form values ---
*/

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
  category: '',
  subcategory: '',
};

/*
--- Yup Config ---
*/

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
              {/* --- Full Name--- */}
              <div className="form">
                <FormFullName />
              </div>

              {/* --- Email --- */}
              <div className="form">
                <FormEmail />
              </div>

              {/* --- Phone --- */}

              <div className="form">
                <FormPhone />
              </div>

              {/* --- Categories / Select --- */}

              <div className="form options">
                <FormCategories />
              </div>

              {/* --- Message --- */}
              <div className="form">
                <FormMessage />
              </div>

              <p className="radiotext">
                Please select at least one of the following:
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;

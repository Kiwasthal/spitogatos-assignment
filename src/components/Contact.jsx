import Map from '../assets/Contact_Map.png';
import { Formik, Form } from 'formik';
import * as YUP from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import FormMessage from './Form_partials/FormMessage';
import FormFullName from './Form_partials/FormName';
import FormEmail from './Form_partials/FormEmail';
import FormPhone from './Form_partials/FormPhone';
import FormCategories from './Form_partials/FormCategories';
import FormCheckBoxGroup from './Form_partials/FormCheckboxGroup';

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
  checkboxOption: [],
};

/*
--- Yup Config ---
*/

const validationSchema = YUP.object({
  fullname: YUP.string().required('Full Name is required'),
  email: YUP.string()
    .email()
    .required('Email is required')
    .matches(/\@spitogatos.gr$/, '🐱 Spitogatos Only 🐱'), //Allow only \@spitogatos.gr/ suffix

  //Removing whitespace before and after input -> make regex check before validation
  phone: YUP.string()
    .trim()
    .required('Phone is required')
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, // pattern : 111[\s.-]111[\s.-]1111
      'Input must follow a pattern of 111-222-3333 or 111 222 3333 or 111.222.3333'
    ),

  //Message should not exceed 100 characters
  message: YUP.string()
    .min(1, 'At least one character')
    .max(100, 'Cannot exceed 100 characters')
    .required('Message is required'),

  //At least one option should be selected
  checkboxOption: YUP.array()
    .min(1, '← Select at least one option')
    .required('At least one option is required'),

  //No clear direction as to configuring select menu, just assuming category should not be empty
  //Decision made based on response's Music object which provides no subcategories as of now

  category: YUP.string().required('Please select your category of choice'),
});

const ContactSection = () => {
  const onSubmit = values => console.log('Form data', values);

  return (
    <section className="contact">
      {/* --- Map --- */}
      <img className="contact-map" src={Map} alt="" />
      <div className="contact-badge">
        <div className="information-container">
          <span className="information-container-item">S.und@themail.com</span>
          <span className="information-container-item">+30 210 1234 567</span>
          <div className="social">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faGlobeAmericas} className="social-icon" />
          </div>
        </div>
      </div>
      <div className="contact-formwrapper">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {props => (
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
                <FormCategories control={props.values.category} />
              </div>

              {/* --- Message --- */}
              <div className="form">
                <FormMessage control={props.values.message} />
              </div>

              {/* --- Checkboxes --- */}

              <p className="checkboxtext">
                Please select at least one of the following:
              </p>

              <FormCheckBoxGroup />

              {/* --- Submit Button --- */}

              <div className="form-btnwrapper">
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;

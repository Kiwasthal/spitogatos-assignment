import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Helper component displaying submitted values after validation
 */

const modalVariants = {
  hidden: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const SubmitMsg = ({ formData, valid, submitting, reset }) => {
  const controls = useAnimation();

  useEffect(() => {
    console.log(submitting, valid);

    if (submitting && valid) {
      reset();
      controls.start('visible');

      setTimeout(() => {
        controls.start('hidden');
      }, 10000);
    }
  }, [submitting, valid]);

  return (
    <motion.div
      className="form-success"
      variants={modalVariants}
      initial="hidden"
      animate={controls}
    >
      <h4>Thanks for Submitting</h4>
      <p>{formData.fullname}</p>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <p>{formData.category}</p>
      <p>{formData.subcategory}</p>
      <div>
        {formData.checkboxOption.map((option, index) => (
          <p>
            {index + 1}.{option}
          </p>
        ))}
      </div>
      <p>{formData.message}</p>
    </motion.div>
  );
};

export default SubmitMsg;

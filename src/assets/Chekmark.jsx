const CheckMark = ({ error, touched }) => {
  return (
    <>
      {/* Checkmarks appearing in the Phone / Email / Fullname form-sections are only displayed
    if there is no error after the onblur event has occured (handled by the touched attribute) */}
      {!error && touched ? (
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
  );
};

export default CheckMark;

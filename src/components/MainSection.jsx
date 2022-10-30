const MainSection = () => {
  return (
    <section className="main">
      <div className="main-item">
        <div
          className="image-container one"
          role="img"
          aria-label="pop-art style woman using a camera"
        />
        <div className="information-container">
          <h4>Since the 1500s</h4>
          <h3>The standard</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
      </div>
      <div className="main-item">
        <div className="information-container secondary">
          <h4>Since the 1500s</h4>
          <h3>The standard</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Search</button>
        </div>
        <div
          className="image-container two"
          role="img"
          aria-label="black pillow with pointy edges"
        />
      </div>
    </section>
  );
};

export default MainSection;

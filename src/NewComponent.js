import electronicsImage from "./images/electronics.jpg";
import decorationImage from "./images/decoration.jpg";

const NewComponent = () => {
  return (
    <div id="category-container" className="category-container">
      <h3>Shop by category</h3>
      <hr />
      <div className="category-grid">
        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={decorationImage}
              alt="decoration"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={electronicsImage}
              alt="electronics"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 classNambody="mb-0 product-link pb-3 secondary">
                Electronics
              </h4>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={decorationImage}
              alt="decoration"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={electronicsImage}
              alt="electronics"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={decorationImage}
              alt="decoration"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://www.redi-school.org/">
            <img
              src={electronicsImage}
              alt="electronics"
              className="product-img"
            />
          </a>
          <div className="card-body pb-0">
            <a href="https://www.redi-school.org/">
              <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;

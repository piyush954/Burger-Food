import CSS from "./Card.module.css";

const CardFormat = ({ img }) => {
  return (
    <>
      <div
        className="card p-3 border-0 d-grid align-content-between justify-content-center"
        style={{ maxWidth: 400 }}
      >
        <img
          className="card-img img-fluid"
          src={img}
          style={{ maxWidth: 400, maxHeight: 400 }}
          alt="img"
        />
        <div className="card-body text-center">
          <h6 className="card-title text-center fs-2 fw-bold">Card title</h6>
          <p className="card-text text-center">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button className={`${CSS.button} mx-auto`}>
            <p className="mb-0 fs-5">Order Now</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardFormat;

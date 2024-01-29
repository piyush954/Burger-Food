import CSS from "../../Assest/SCSS/SectionSCSS/SectionFive.module.css";
import Bottle from "../../Img/Section Five/Bottle.png";
import Burger from "../../Img/Section Five/Burger.png";
import Plate from "../../Img/Section Five/Plate.png";

const SectionFive = () => {
  return (
    <>
      <div className={`container-fluid mt-5  ${CSS.section} py-5`}>
        <div className="container px-2 text-center">
          <h3 className="h3 fw-mormal fs-2">Reservation</h3>
          <h1 className="mb-5 flex-fill" style={{fontSize: 80, fontWeight: "bolder"}}>Book your tabel</h1>
          <form className="form">
            <div className="d-lg-flex align-items-center justify-content-between gap-lg-3 mb-3 mt-5">
              <div className="col-auto col-lg-6 col-sm-12">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="fs-4 p-3 col-12"
                />
              </div>
              <div className="col-auto col-lg-6 col-sm-12 mt-sm-3 mt-lg-0">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="fs-4 p-3 col-12"
                />
              </div>
            </div>
            <div className="d-lg-flex align-items-center justify-content-between gap-lg-3 mb-3 mt-5">
              <div className="col-auto col-lg-6 col-sm-12">
                <input
                  type="date"
                  id="Date"
                  name="Date"
                  placeholder="Date"
                  required
                  className="fs-4 p-3 col-12"
                />
              </div>
              <div className="col-auto col-lg-6 col-sm-12 mt-sm-3 mt-lg-0">
                <input
                  type="time"
                  id="Time"
                  name="Time"
                  placeholder="Time"
                  required
                  className="fs-4 p-3 col-12"
                />
              </div>
            </div>
            <div className="d-lg-flex align-items-center justify-content-between gap-lg-3 mb-3 mt-5">
              <div className="col-auto col-lg-6 col-sm-12">
                <input
                  type="text"
                  id="person"
                  name="person"
                  placeholder="Person"
                  required
                  className="fs-4 p-3 col-12"
                />
              </div>
              <div className="col-auto col-lg-6 col-sm-12 mt-sm-3 mt-lg-0">
                <button className="btn btn-danger col-12 py-3 fw-bold fs-3">
                  Book a Table
                </button>
              </div>
            </div>
          </form>
        </div>
        <img
          src={Bottle}
          alt="Bottle"
          className={`img-fluid ${CSS.Bottle} d-sm-none d-lg-flex`}
        />
        <img
          src={Burger}
          alt="Burger"
          className={`img-fluid ${CSS.Burger} d-sm-none d-lg-block`}
        />
        <img
          src={Plate}
          alt="Plate"
          className={`img-fluid ${CSS.Plate} d-sm-none d-lg-block`}
        />
      </div>
    </>
  );
};

export default SectionFive;

import img from "../../Img/SliderImg/Burger Image.png";
import CSS from "../../Assest/SCSS/SectionSCSS/SectionFour.module.css";
import "../../Assest/SCSS/SectionSCSS/SectionFour.module.css";

const SectionFour = () => {

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide container-fluid mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators d-lg-block">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={`active ${CSS.radioButton}`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={`${CSS.radioButton}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={`${CSS.radioButton}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner py-3">
          <div className="carousel-item active">
            <div className="container d-lg-flex shadow align-items-center">
              <div className="col-lg-6 px-3">
                <h3 className="h3">Subtitle</h3>
                <h1 className="h1 fw-bolder">Heading</h1>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti eum, dolorum laudantium animi maiores velit culpa!
                  Voluptatem dicta voluptatum molestiae?
                </p>
              </div>
              <img src={img} className="img-fluid" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="container d-lg-flex shadow align-items-center">
              <div className="col-lg-6 px-3">
                <h3 className="h3">Subtitle</h3>
                <h1 className="h1 fw-bolder">Heading</h1>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti eum, dolorum laudantium animi maiores velit culpa!
                  Voluptatem dicta voluptatum molestiae?
                </p>
              </div>
              <img src={img} className="img-fluid" alt="..." />
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container d-lg-flex shadow align-items-center">
              <div className="col-lg-6">
                <h3 className="h3">Subtitle</h3>
                <h1 className="h1 fw-bolder">Heading</h1>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti eum, dolorum laudantium animi maiores velit culpa!
                  Voluptatem dicta voluptatum molestiae?
                </p>
              </div>
              <img src={img} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;

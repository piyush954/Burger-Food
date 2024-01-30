import CSS from "../../Assest/SCSS/SectionSCSS/Section.module.css";
import React from "react";
import firstImg from "../../Img/bgImages/firstImg.png";
import secondImg from "../../Img/bgImages/secondImg.png";
import thirdImg from "../../Img/bgImages/thirdImg.png";

const SectionSecond = () => {
  return (
    <>
      <div className="contaner-fluid p-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={`${CSS.imgDiv}`}>
                <img src={firstImg} alt="firstImg" className="img-fluid" />
                <div className="text-truncate">
                  <h4 className="h4 mb-0">Try it Today</h4>
                  <h1 className="h1">Most Popular Burger</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-grid align-content-between">
              <div className={`${CSS.imgDiv} mt-sm-4 mt-md-4 mt-lg-0`}>
                <img src={secondImg} alt="firstImg" className="img-fluid" />
                <div className="text-truncate">
                  <h4 className="h4 mb-0 fs-5">Try it Today</h4>
                  <h1 className="h1 fs-3">
                    More fun <br /> more taste
                  </h1>
                </div>
              </div>
              <div className={`${CSS.imgDiv} mt-sm-4 mt-md-4 mt-lg-0`}>
                <img src={thirdImg} alt="firstImg" className="img-fluid" />
                <div className="text-truncate">
                  <h4 className="h4 mb-0 fs-5">Try it Today</h4>
                  <h1 className="h1 fs-3">Fresh & Chili</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSecond;

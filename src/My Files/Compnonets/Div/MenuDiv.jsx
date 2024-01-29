import CSS from "../../Assest/SCSS/MenuSCSS/Menu.module.css";
import HeaderImg from "../../Img/HeaderImg.png";

export const LeftDiv = ({ subHeading }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className={`${CSS.subHeading} p-2 rounded-1`}>
          <h3 className="mb-0">{subHeading}</h3>
        </div>
        <div className={`${CSS.myFont} ps-1`}>
          <p className={`${CSS.Burger} mb-0 text-truncate gs-0`}>BURGER</p>
          <p className={`${CSS.Week} mb-0`}>Week</p>
        </div>
      </div>
    </>
  );
};

export const RightDiv = () => {
  return (
    <>
      <div className={`${CSS.rightDiv} col-lg-6`}>
        <img
          src={HeaderImg}
          alt="Header Images"
          className="img-fluid px-auto mx-auto"
        />
        <div className={`${CSS.imgSmall}`} >
          <div className={`${CSS.imgSmallText} fw-bold text-center`}>
            $4.9 <br /> <span className="fw-normal">Only</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const HeroSection = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <LeftDiv subHeading="IT IS A GOOD TIME TO TASTE A BURGER" />
            <RightDiv />
          </div>
        </div>
      </div>
    </>
  );
};

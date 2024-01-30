import CSS from "../../Assest/SCSS/SectionSCSS/Section.module.css";
import React from "react";
import CardFormat from "../../Compnonets/Card/Card";
import cardImgOne from "../../Img/cardImg/CardImgOne.png";
import cardImgTwo from "../../Img/cardImg/CardImgTwo.png";
import cardImgThree from "../../Img/cardImg/CardImgThree.png";

const SubHeading = () => {
  return (
    <>
      <span
        className={`p-3 bg-warning fs-6 text-uppercase + ${CSS.primeColor}`}
      >
        Always tasty hunger
      </span>
    </>
  );
};

const Heading = () => {
  return (
    <>
      <h1
        className={`text-uppercase mt-4 fw-bolder + ${CSS.primeColor} ${CSS.bold}`}
      >
        choose & enjoye
      </h1>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit
        officia magni architecto ex soluta temporibus, facilis tempore assumenda
        atque corrupti expedita rerum voluptatum, voluptas, odio velit tenetur
        molestiae vel!
      </p>
    </>
  );
};

const SectionThree = () => {
  const arrImg = [cardImgOne,cardImgThree, cardImgTwo];

  return (
    <>
      <div className="container-fluid my-5 py-5">
        <div className="container text-center">
          <SubHeading />
          <Heading />
          <div className="row d-flex justify-content-around mt-5">
            {arrImg.map((items) =>(
              <CardFormat img={items} key={items}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;

import React from "react";
import CSS from "../../Assest/SCSS/SectionSCSS/Footer.module.css";
import Logo from "../../Img/LogoBig.png";
import { TiLocation } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className={`container p-5 ${CSS.bgImg} text-white`}>
          <div className="col-auto">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="d-lg-flex">
            <div className="mt-2 col-lg-6">
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, laudantium eum voluptatum corrupti repellat itaque sunt
                neque similique at nulla, nostrum beatae mollitia dignissimos
                veniam? Quos numquam maxime debitis aut quidem quam? Obcaecati
                reprehenderit earum pariatur sint quisquam aperiam aliquam!
              </p>
            </div>
            <div className="col-lg-6 fs-6 fw-normal p-5 text-start ms-4 d-grid align-content-center">
              <span>
                <TiLocation style={{ fontSize: 30 }} />  Main road, Building
                Name, Country
              </span>
              <br />
              <span>
                <IoMail style={{ fontSize: 30 }} />  info@companyname.com
              </span>
            </div>
          </div>
          <div className="d-lg-flex justify-content-between align-items-center">
            <p>
              &copy; <span> CompanyName</span>, All rights reserved.
            </p>
            <span className="fs-2 d-flex gap-3">
              <FaFacebook />
              <FaInstagramSquare />
              <FaTwitter />
              <FaWhatsappSquare />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

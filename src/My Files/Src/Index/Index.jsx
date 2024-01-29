import Menu from "../Menu/Menu";
import CSS from "../../Assest/SCSS/MenuSCSS/Menu.module.css";
import { HeroSection} from "../../Compnonets/Div/MenuDiv";
import SectionSecond from "../Section/SectionSecond";
import SectionThree from "../Section/SectionThree";
import SectionFour from "../Section/SectionFour";
import SectionFive from "../Section/SectionFive";
import Footer from "../Section/Footer";

const Index = () => {
  return (
    <>
      <div className={`${CSS.bgImg}`}>
        <Menu />
        <HeroSection/>
      </div>
      <SectionSecond />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </>
  );
};

export default Index;

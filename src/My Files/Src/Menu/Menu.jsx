import MenuItems from "../../Compnonets/MenuComponents/MenuItems";
import Logo from "../../Img/Logo.png";
import CSS from '../../Assest/SCSS/MenuSCSS/Menu.module.css'

const Menu = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${CSS.noBg}`}
      >
        <div className={`container-fluid ${CSS.noBg} mx-auto px-5`}>
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuItems />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;

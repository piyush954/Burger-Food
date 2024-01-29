import CSS from '../../Assest/SCSS/MenuSCSS/Menu.module.css'

const MenuItems = () => {
  const MenuData = ["Home", "Menu", "Our STory", "Contact Us"];

  return (
    <>
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        {MenuData.map((items) => (
          <li className={`"nav-item fw-bold fs-6" + ${CSS.MenuHover}`} key={items}>
            <a
              className="nav-link px-3"
              aria-current="page"
              href="/"
              key={items}
            >
              {items}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItems;

import logo from "../../assets/A.G.logo.png";
import "./Header.css";

const Header = () => {
  const deviceWidth = window.innerWidth >= 767;
  return (
    <div className={deviceWidth ? "navbar-web" : "navbar-mobile"}>
      <img
        className={deviceWidth ? "img-web" : "img-mobile"}
        src={logo}
        alt="A.G. logo"
      />
      <ul className={deviceWidth ? "navlist-web" : "navlist-mobile"}>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Header;

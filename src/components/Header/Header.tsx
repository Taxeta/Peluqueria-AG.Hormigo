import logo from "../../assets/logoAG.png";
import "./Header.css";

const Header = () => {
  const deviceWidth = window.innerWidth >= 767;
  return (
    <div className={deviceWidth ? "navbar-web" : "navbar-mobile"}>
      <img src={logo} alt="A.G. logo" width="20%" height="20%" />
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

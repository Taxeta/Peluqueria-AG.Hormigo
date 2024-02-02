import { useEffect, useState } from "react";
import logo from "../../assets/logoAG.png";
import "./Header.css";

const Header = () => {
  const deviceWidth = window.innerWidth >= 767;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleActiveReference = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    handleActiveReference("inicio");
  }, []);

  return (
    <div className={deviceWidth ? "navbar-web" : "navbar-mobile"}>
      <img className="header-logo" src={logo} alt="A.G. logo" />
      <ul className={deviceWidth ? "navlist-web" : "navlist-mobile"}>
        <li>
          <a
            className={
              activeSection === "inicio"
                ? "navBar-isActive"
                : "navBar-isInactive"
            }
            href="#inicio"
            onClick={() => handleActiveReference("inicio")}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className={
              activeSection === "servicios"
                ? "navBar-isActive"
                : "navBar-isInactive"
            }
            href="#servicios"
            onClick={() => handleActiveReference("servicios")}
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            className={
              activeSection === "productos"
                ? "navBar-isActive"
                : "navBar-isInactive"
            }
            href="#productos"
            onClick={() => handleActiveReference("productos")}
          >
            Productos
          </a>
        </li>
        <li>
          <a
            className={
              activeSection === "contacto"
                ? "navBar-isActive"
                : "navBar-isInactive"
            }
            href="#contacto"
            onClick={() => handleActiveReference("contacto")}
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

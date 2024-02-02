import cc from "../../assets/cclicense.png";
import vimi from "../../assets/Vimi-LogoLicense.png";
import AGlogo from "../../assets/logoAG.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer__info">
          <img className="ag-logo" src={AGlogo} alt="logo A.G.Hormigo" />
        </div>
        <div className="footer__info">
          <div className="credits-img">
            <span className="footer__credits">Crédito de las imágenes</span>
            <img className="logo-img" src={cc} alt="logo creditos cc" />
            <img className="logo-img" src={vimi} alt="logo creditos vimi" />
          </div>
        </div>
      </div>
      <span className="footer__copyright">
        ©{new Date().getFullYear()} Peluquería A.G.Hormigo developed by Jose
        Manuel Vera
      </span>
    </>
  );
};

export default Footer;

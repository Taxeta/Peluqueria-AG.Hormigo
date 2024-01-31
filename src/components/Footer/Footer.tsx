import cc from "../../assets/cclicense.png";
import vimi from "../../assets/Vimi LogoLicense.png";
import AGlogo from "../../assets/logoAG.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <div className="footer__info">
          <img src={AGlogo} alt="logo A.G.Hormigo" width="40%" height="50%" />
        </div>
        <div className="footer__info">
          <div className="credits-img">
            <span className="footer__credits">Crédito de las imágenes</span>
            <img src={cc} alt="logo creditos cc" width="20%" height="35%" />
            <img src={vimi} alt="logo creditos vimi" width="20%" height="35%" />
          </div>
        </div>
      </section>
      <span className="footer__copyright">
        ©{new Date().getFullYear()} Peluquería A.G.Hormigo developed by Jose
        Manuel Vera
      </span>
    </>
  );
};

export default Footer;

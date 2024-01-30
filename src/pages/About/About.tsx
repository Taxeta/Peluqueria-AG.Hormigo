import AGCard from "../../assets/AgTarjeta.png";
import "./About.css";

const About = () => {
  return (
    <div className="aboutpage-container">
      <h2 className="contact__title">Información de Contacto</h2>
      <img
        className="contact__data"
        src={AGCard}
        alt="tarjeta empresa con logo"
      />
      <p className="info-pharagraph">
        ¡Descubre la diferencia de un cuidado capilar excepcional con nosotros!
      </p>
    </div>
  );
};

export default About;

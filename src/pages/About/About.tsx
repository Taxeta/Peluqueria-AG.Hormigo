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
      <div className="horario-container">
        <span className="info-horario">Horario de apertura</span>
        <span className="info-horario">Lunes-Sábado 9:00 - 14:00</span>
        <span className="info-horario">Excluidos Domingos y Festivos</span>
      </div>
      <p className="info-pharagraph">
        ¡Descubre la diferencia de un cuidado capilar excepcional con nosotros!
      </p>
    </div>
  );
};

export default About;

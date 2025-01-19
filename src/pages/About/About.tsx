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
        <h3 className="info-horario">Horario de apertura</h3>
        <span className="info-horario">Lunes-Sábado 9:00 - 14:00</span>
        <span className="info-horario">Cerrado Domingos y Festivos</span>
      </div>
      <div className="telefono-container">
        <h3 className="info-telefono">Reserva de horas</h3>
        <h4 className="info-telefono">Llamar</h4>
        <div>
          <i className="fa-duotone fa-solid fa-phone fa-2x contacto-iconos"></i>
          <a href="tel:+34722616550" className="info-telefono">
            +34 722 61 65 50
          </a>
        </div>
        <h4 className="info-telefono">Whatsapp</h4>
        <div>
          <i className="fa-brands fa-square-whatsapp fa-2x contacto-iconos"></i>
          <a href="https://wa.link/ka47dw" className="info-telefono ml-">
            +34 722 61 65 50
          </a>
        </div>
      </div>
      <p className="info-pharagraph">
        ¡Descubre la diferencia de un cuidado capilar excepcional con nosotros!
      </p>
    </div>
  );
};

export default About;

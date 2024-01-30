import extensiones from "../../assets/extensiones.jpg";
import tinte from "../../assets/tinte-mujer.jpg";
import marcar from "../../assets/lavar-marcar.jpg";
import corte from "../../assets/corte-mujer.jpg";
import caballeroCorte from "../../assets/corte-hombre.jpg";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-container">
      <h2>Nuestros servicios</h2>
      <article className="services-list">
        <ul className="services-card">
          <li>
            <strong>Lavar + Marcar</strong>
          </li>
          <li>Desde 20€</li>
          <li>
            <img className="service-img" src={marcar} alt="foto de marcado" />
          </li>
        </ul>
        <ul className="services-card">
          <li>
            <strong>Cortar + Lavar</strong>
          </li>
          <li>Desde 35€</li>
          <li>
            <img
              className="service-img"
              src={corte}
              alt="foto corte pelo mujer"
            />
          </li>
        </ul>
        <ul className="services-card">
          <li>
            <strong>Teñir + Lavar</strong>
          </li>
          <li>Desde 50€</li>
          <li>
            <img className="service-img" src={tinte} alt="foto tinte mujer" />
          </li>
        </ul>
        <ul className="services-card">
          <li>
            <strong>Keratina</strong>
          </li>
          <li>Desde 100€</li>
          <li>
            <img
              className="service-img"
              src={extensiones}
              alt="foto de extensiones"
            />
          </li>
        </ul>
        <ul className="services-card">
          <li>
            <strong>Corte Caballero</strong>
          </li>
          <li>Desde 20€</li>
          <li>
            <img
              className="service-img"
              src={caballeroCorte}
              alt="foto corte caballero"
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ServicesPage;

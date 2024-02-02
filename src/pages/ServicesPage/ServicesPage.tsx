import keratina from "../../assets/keratina.webp";
import tinte from "../../assets/tinte-mujer.webp";
import marcar from "../../assets/lavar-marcar.webp";
import corte from "../../assets/corte-mujer.webp";
import caballeroCorte from "../../assets/corte-hombre.webp";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-container">
      <h2 className="services__title">Nuestros servicios</h2>
      <p className="services__slogan">
        &quot;Porque tu cabello <strong>merece lo mejor</strong>&quot;
      </p>
      <div className="services-list">
        <ul className="services-card">
          <li>
            <strong>Lavar + Marcar</strong>
          </li>
          <li>Desde 20€</li>
          <li>
            <img
              className="service-img"
              src={marcar}
              loading="lazy"
              alt="foto de marcado"
            />
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
              loading="lazy"
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
            <img
              className="service-img"
              src={tinte}
              loading="lazy"
              alt="foto tinte mujer"
            />
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
              src={keratina}
              loading="lazy"
              alt="foto pelo con keratina"
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
              loading="lazy"
              alt="foto corte caballero"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesPage;

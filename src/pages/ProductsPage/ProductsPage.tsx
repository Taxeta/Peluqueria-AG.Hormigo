import inshigt_products from "../../assets/inshigt.webp";
import kerastase_products from "../../assets/kerastase.webp";
import schwarz_products from "../../assets/schwarzkopf.webp";
import loreal_products from "../../assets/loreal.webp";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <section className="productspage">
      <h2 className="productspage__title">Nuestros productos</h2>
      <p className="productspage__slogan">
        En <strong>Peluquería Alicia Guerrero</strong>, cada detalle cuenta.
        <br />
        Elevamos tu look con <strong>pasión y calidad</strong>, utilizando solo
        los <strong>productos más exclusivos</strong> para tu cabello.
      </p>
      <div className="productspage-container">
        <img
          className="productspage__img"
          src={schwarz_products}
          alt="imagen productos schwarzkopf"
          loading="lazy"
        />
        <img
          className="productspage__img"
          src={loreal_products}
          alt="imagen productos loreal"
          loading="lazy"
        />
        <img
          className="productspage__img"
          src={inshigt_products}
          alt="imagen productos inshigt"
          loading="lazy"
        />
        <img
          className="productspage__img"
          src={kerastase_products}
          alt="imagen productos keratase"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ProductsPage;

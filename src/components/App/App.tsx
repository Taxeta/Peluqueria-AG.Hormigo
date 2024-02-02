import About from "../../pages/About/About";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <main className="main-container">
      <Header />
      <div id="inicio">
        <LandingPage />
      </div>
      <div id="servicios">
        <ServicesPage />
      </div>
      <div id="productos">
        <ProductsPage />
      </div>
      <div id="contacto">
        <About />
      </div>
      <Footer />
    </main>
  );
}

export default App;

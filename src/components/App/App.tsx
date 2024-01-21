import About from "../../pages/About/About";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <LandingPage />
        <ServicesPage />
        <ProductsPage />
        <About />
      </div>
    </>
  );
}

export default App;

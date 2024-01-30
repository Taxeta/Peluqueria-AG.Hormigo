import About from "../../pages/About/About";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <main className="main-container">
      <Header />
      <LandingPage />
      <ServicesPage />
      <ProductsPage />
      <About />
      <Footer />
    </main>
  );
}

export default App;

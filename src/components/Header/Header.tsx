import logo from "../../assets/A.G.logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="" src={logo} alt="A.G. logo" width={38} height={38} />
      <ul className="nav-bar">
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;

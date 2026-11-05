
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Meu Aplicativo React</h1>

      <nav className="menu">
        <Link to="/" className="menu-link">
          Home
        </Link>

        <Link to="/about" className="menu-link">
          About
        </Link>

        <Link to="/contact" className="menu-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;

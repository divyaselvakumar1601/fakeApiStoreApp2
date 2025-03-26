import { Link } from "react-router-dom";
import "../styles/ProductPages.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;

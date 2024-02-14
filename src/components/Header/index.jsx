import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import Logo from "/img/argentBankLogo.png";

function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <NavLink
          to="/login"
          className="nav-link"
        >
          <i className="fa fa-user-circle"></i>
         Sign in
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

import { Link, NavLink  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import Logo from "/img/argentbanklogo-300.webp";
import { logout } from "../../assets/redux/reducers/authSlice";

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleLogOut =  () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Argent Bank Logo" data-testid="logo cie" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!isAuthenticated ? (
          <NavLink to="/login" className="nav-link">
            <i className="fa fa-user-circle"></i>
            Sign in
          </NavLink>
        ) : (
          <div className="row">
            <NavLink to="/profile" className="nav-link">
              <i className="fa fa-user-circle"></i>
              {user.profil.userName}
            </NavLink>

            <a className="nav-link" onClick={toggleLogOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
            </a>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

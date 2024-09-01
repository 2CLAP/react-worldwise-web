import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";

function PageNav() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            {isAuthenticated ? "Start tracking" : "Login"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;

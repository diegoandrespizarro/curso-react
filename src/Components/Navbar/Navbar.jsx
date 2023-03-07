import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{color: "#e1d4c7"}}> <img src="https://res.cloudinary.com/dhweg6cvn/image/upload/v1678218118/zapatillas/logochico_wrtunh.jpg" alt="" className={styles.navbarImg}/> </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>Todas</Link>
          <Link to="/category/urbanas" className={styles.navbarItem}>Urbanas</Link>
          <Link to="/category/deportivas" className={styles.navbarItem}>Deportivas</Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
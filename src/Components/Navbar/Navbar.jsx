

import styles from "./Navbar.module.css"
import zapa from "../../images/zapa.jpg"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {

    return ( 
        <div className={styles.containerNavbar}>
            <img src={zapa} alt=""  />
                <ul className={styles.containerList}>
                    <a href=""><li>Contacto</li></a>
                    <a href=""><li>Quienes somos</li></a>
                    <a href=""><li>Ayuda</li></a>
                </ul>
            <CartWidget />
        </div>
    )
}
export default Navbar
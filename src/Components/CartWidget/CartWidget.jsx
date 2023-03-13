import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  
  const { getTotalQuantity } = useContext ( CartContext )

const total = getTotalQuantity()

  return (
  <Link to="/Cart">
      <div className="container-cart">
      <BsFillCartCheckFill
        style={{
          fontSize: "2rem",
          color: "#e1d4c7",
        }}
      />
      <div className="bubble-counter">
        <span>{total}</span>
      </div>
    </div>
  </Link>
  );
};

export default CartWidget;
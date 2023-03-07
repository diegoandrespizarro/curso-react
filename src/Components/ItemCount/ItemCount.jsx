import { useState } from "react";
import styles from "./ItemCount.module.css"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  


  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={styles.ItemContador}>

      <h2 className={styles.ItemNum}>{contador}</h2>

      <button onClick={sumar} className={styles.ItemSuma}>Sumar</button>

      <button onClick={restar} className={styles.ItemResta}>Restar</button>

      <button onClick={ ()=> onAdd(contador) } className={styles.ItemAgregar}>Agregar al carrito</button>
      
    </div>
  );
};

export default ItemCount;
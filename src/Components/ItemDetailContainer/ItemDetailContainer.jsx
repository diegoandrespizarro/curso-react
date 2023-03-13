import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { products } from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount'
import styles from "./itemDetail.module.css"


const ItemDetailContainer = () => {

    const { id } = useParams()

    const {agregarAlCarrito} = useContext(CartContext)

    const productSelected = products.find( (element)=> element.id === Number(id))

    const onAdd = (cantidad) =>{


      let producto =  {
        ...productSelected,
        quantity: cantidad,
      }

      agregarAlCarrito(producto)

    }
    
  return (
    <div className={styles.ItemDetail} >
        <h1 className={styles.ItemTitle}>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" className={styles.ItemImg}/>
        <ItemCount stock={productSelected.stock} onAdd={onAdd} className={styles.ItemContador}/>
    </div>
  );
};

export default ItemDetailContainer;
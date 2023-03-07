import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount'
import styles from "./itemDetail.module.css"


const ItemDetailContainer = () => {

    const { id } = useParams()
    
    const productSelected = products.find( (element)=> element.id === Number(id))

    const onAdd = (cantidad) =>{
      console.log(`se agrego al carrito ${cantidad} productos`)
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
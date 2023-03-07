import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailContainer = () => {

    const { id } = useParams()
    
    const productSelected = products.find( (element)=> element.id === Number(id))

    const onAdd = (cantidad) =>{
      console.log(`se agrego al carrito ${cantidad} productos`)
    }
    
  return (
    <div style={ {
      display: "flex",
      width: "86%",
      minHeight: "100vh",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      padding: "10px 0"
  } }>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetailContainer;
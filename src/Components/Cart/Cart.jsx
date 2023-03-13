import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const Cart = () => {

  const {cart, clearCart, getTotalPrice} = useContext(CartContext)
  const precioTotal = getTotalPrice()
  return (
    <div style={{width: "100%", display: "flex", justyficontent: "space-evenly"}}>
        <h1>{
            cart.map((elemento)=>{
              return <div >
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" />
                <h3>cantidad: {elemento.quantity}</h3>
                <h3>{elemento.price}</h3>
              </div>
            })
          }
        </h1>
        <h1>El total del carrito es: {precioTotal}</h1>
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart
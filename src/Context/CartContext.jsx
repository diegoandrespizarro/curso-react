import { createContext, useState } from "react"


 export  const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])



    const agregarAlCarrito =(producto)=>{
    
        let existe = isInCart(producto.id)

        if(existe){
            
            let newCart = cart.map((elemento)=> {
                if(elemento.id === producto.id){
                    return {
                        ...elemento,
                        quantity: elemento.quantity + producto.quantity
                    }
                }else{
                    return elemento
                }
            })

            setCart(newCart)

        }else{
            setCart([...cart,producto]);
        }

    };
// funcion para saber si el producto ya es en el carrito
        const isInCart = (id) =>{

            return cart.some( (elemento) => elemento.id === id)
            
        }

// funcion para limpiar el carrito
    const clearCart = ()=>{
        setCart([])
    }
// obtener el total de las cantidades de los elementos del carrito

const getTotalQuantity = ()=>{

    const total = cart.reduce((acc, elemento) =>{
        return acc + elemento.quantity
    }, 0 )
    return total
}

//
    const getTotalPrice = () =>{
        let precioTotal = cart.reduce((acc, elemento)=>{
            return acc + (elemento.quantity * elemento.price)
        }, 0)
        return precioTotal
    }

    let data = {
        cart,
        agregarAlCarrito: agregarAlCarrito,
        clearCart,
        getTotalQuantity,
        getTotalPrice
    }

  return (
    <CartContext.Provider value={ data } >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
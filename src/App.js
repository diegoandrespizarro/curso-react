
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Form from "./Components/Form/Form";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
          <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/Cart" element={<Cart /> } />
                <Route path="/item/:id" element={<ItemDetailContainer /> } />
                <Route path="/formulario" element={<Form/>} />
                <Route path="*" element={<h1>Error 404: Not found</h1>} />
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;



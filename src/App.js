
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Cart/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/Cart" element={<Cart /> } />
              <Route path="/item/:id" element={<ItemDetailContainer /> } />
              <Route path="/Login" element={<Login/>} />
              <Route path="*" element={<h1>Error 404: Not found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;



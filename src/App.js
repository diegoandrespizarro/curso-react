

import CartWidget from "./Components/CartWidget/CartWidget";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar"
import ProductCard from "./Components/ProdutCard/ProductCard";

function App() {
  return (
    <div>
      
      <Navbar />
      <ItemListContainer greeting={"Hola como estas"} />
      <ProductCard title="Producto 1" price={200} isRed={true}/>
      <ProductCard title="Producto 2" price={500} isRed={false}/>
      <ProductCard title="Producto 3"  isRed={false}/>
      <Footer />
    </div>
  );
}

export default App;




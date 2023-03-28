import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {collection, getDocs } from "firebase/firestore";


const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) =>{
        return{
          ...category.data(),
          id:category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);
  
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{color: "#e1d4c7"}}> <img src="https://res.cloudinary.com/dhweg6cvn/image/upload/v1678218118/zapatillas/logochico_wrtunh.jpg" alt="" className={styles.navbarImg}/> </Link>
        
        <ul className={styles.containerList}>
        {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget  />
      </div>
      {children}
    </div>
  );
};
export default Navbar;
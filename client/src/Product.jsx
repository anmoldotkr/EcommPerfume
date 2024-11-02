import React, {useEffect,useState} from "react";
import axios from "axios"

const App = () =>{
  const [products,setProducts] = useState([]);
  const[loading,setLoading] = useState(true); 
}

useEffect(()=>{
  //fetch the products from the api
  axios.get(http)
})

export const Product = () => {
  return <div>Product</div>;
};

import { useState } from "react";
import axios from "axios";

const useProducts = () => {

  const [products,setProducts] = useState([]);
  const [skip,setSkip] = useState(0);
  const limit = 10;

  const fetchProducts = async()=>{

    try{

      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      setProducts(prev => [...prev,...res.data.products]);

    }catch(error){
      console.log(error)
    }

  }

  const searchProducts = async(text)=>{

    try{

      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${text}`
      );

      setProducts(res.data.products);

    }catch(error){
      console.log(error)
    }

  }

  const loadMore = ()=>{
    setSkip(prev => prev + limit);
  }

  return{
    products,
    fetchProducts,
    searchProducts,
    loadMore
  }

}

export default useProducts;

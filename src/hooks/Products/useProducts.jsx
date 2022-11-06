import axios from 'axios'
import React , {useState, useEffect } from 'react'

export default function useProducts() {

    const [products, setProducts] = useState([])

    const getProducts =async () => {
        const res = await axios.get("/search?key=")
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts()
    }, []);
  return {
    products : [products, setProducts]
  }
    
  
}

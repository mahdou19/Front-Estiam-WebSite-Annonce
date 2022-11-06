import React, {useContext} from 'react'
import "./Products.css"
import { useElementContext } from '../../../Context/Context'
import ProductItem from './ProductItem'

export const Products = () => {

    const state = useContext(useElementContext)

    const [products] = state.ProductHooks.products

    console.log(products);
   
   
  return (
    <div className='products'>
          {
            products.map(product => {
                return <ProductItem key={product.id} product={product}/>
            })
          }
    </div>
  )
}

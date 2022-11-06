import React, {createContext, useState} from 'react'

import ProductHooks from "../hooks/Products/useProducts"

export const useElementContext = createContext()


export const DataProvider = ({children}) =>{

    const [token, setToken] = useState(false)

const elementContext = {

    token : [token, setToken],
    ProductHooks : ProductHooks()

}
   
    return (
        <useElementContext.Provider value={elementContext}>
            {children}
        </useElementContext.Provider>
    )
}
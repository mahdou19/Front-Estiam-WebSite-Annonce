import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'

import ProductHooks from "../hooks/Products/useProducts"
import UserAPI from '../hooks/UserHooks/UserHooks'

export const useElementContext = createContext()


export const DataProvider = ({children}) =>{

    const [token, setToken] = useState(false)

    useEffect(() =>{
        const firstLogin = localStorage.getItem('FirstLogin')
        console.log("firstLogin", firstLogin);
        if(firstLogin){
            setToken(true)
        }
    },[])

const elementContext = {

    token : [token, setToken],
    UserApi: UserAPI(token),
    ProductHooks : ProductHooks()

}
   
    return (
        <useElementContext.Provider value={elementContext}>
            {children}
        </useElementContext.Provider>
    )
}
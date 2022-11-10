import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'

import ProductHooks from "../hooks/Products/useProducts"

export const useElementContext = createContext()


export const DataProvider = ({children}) =>{

    const [token, setToken] = useState(false)

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/me', {
                    headers: {Authorization: token}
                })
                console.log(res);
        
                // setToken(res.data.accesstoken)
    
                // setTimeout(() => {
                //     refreshToken()
                // }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])

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
import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const firstLogin = localStorage.getItem('FirstLogin')
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/me', {
                        headers: {Authorization: `Bearer ${firstLogin}`}
                    })
                    console.log("res", res.data);

                    setIsLogged(res.data)
                    

                } catch (err) {
                   console.log(err);
                }
            }

            getUser()
            
        }
    },[token])    

    return {
        isLogged: [isLogged, setIsLogged],
        history: [history, setHistory]
    }
}

export default UserAPI
 
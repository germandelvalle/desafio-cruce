import {useState} from 'react'
import { loginWithGoogle } from '../firebase/client'
import Login from './Login'
import Main from './Main'





const Inicio = ()=>{

    const [user,setUser] = useState(null)

    const handClick = ()=>{
        loginWithGoogle().then(user=>{
            
            console.log(user)
            setUser(user)
        }).catch(err=>{
            console.log(err)})
    }


    return (
        <> 
            
        {console.log(user)}
        {
            
            user?<Main dataUser={user}/>: <Login handleClick={handClick}/>
        }
        </>
    )
}

export default Inicio
import { useState,useEffect } from 'react'

import Producto from "./Producto"



const Catalogo = ()=>{

    const [productos , setProductos] = useState([])

    useEffect(()=>{
        console.log('estas en el use effect')
        getProductos()
    },[])

    const getProductos = async ()=>{
        try{
            const response =await fetch('products.json')
        const data = await response.json()
        setProductos(data)
        }catch(e){
            console.log(e)
        }
        
    }


    return(
        <div className="d-flex justify-content-evenly flex-wrap">
            
            {
                productos.map((producto,key)=> <Producto key={key} nombre={producto.name} imagen={producto.image} precio={producto.price}/>)
            }
            
        </div>
    )
}

export default Catalogo
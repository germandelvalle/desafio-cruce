import { useState,useEffect } from 'react'

import Producto from "./Producto"

//import datos from "products.json"

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

    /* 
    .then(response => response.json())
    .then(data => console.log(data)); */


    return(
        <div>
            Catalogo

            {
                productos.map((producto)=> <Producto nombre={producto.name} imagen={producto.image} precio={producto.price}/>)
            }
            
        </div>
    )
}

export default Catalogo
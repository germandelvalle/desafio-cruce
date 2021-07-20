import { useState,useEffect } from "react"
import Producto from "./Producto"
import { db } from "../firebase/client"

const CatalogoApi = ()=>{
    const [productos , setProductos] = useState([])
    

    useEffect(()=>{
        console.log('estas en el use effect')
        getProductos()
    },[])

    const getProductos = async ()=>{
        db.collection('products').onSnapshot((querySnapshot)=>{
            const docs = []
            querySnapshot.forEach((doc)=>{docs.push({...doc.data(),id:doc.id})})
            console.log(docs)
            setProductos(docs)
        })
        
    }

    


    return(
        <>
        <h1 style={{margin:'25px 0',textAlign:'center',lineHeight:'2'}}>Catalogo</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
            
            {
                productos.map((producto)=> <Producto id={producto.id} nombre={producto.name} imagen={producto.image} precio={producto.price}/>)
            }
            
        </div>
        </>
    )
    
}

export default CatalogoApi
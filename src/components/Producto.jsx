import { Card,Button } from "react-bootstrap"
import { db } from "../firebase/client"
import EditProduct from "./EditProduct"
import { useState } from "react"



const Producto = ({nombre,precio,imagen,id})=>{
    console.log(id)

    const [edit,setEdit] = useState(false)
    const [productEdit,setProductEdit] = useState({name:'',price:'',Image:''})

    const deleteProducto = async (id)=>{
        console.log(id)
        await db.collection('products').doc(id).delete()
    }
    const getProductById = async(id)=>{
        const doc = await db.collection('products').doc(id).get()
        setProductEdit(doc.data())
        console.log(doc.data())
    }
    const editProductFunc = async (bool,id)=>{
        //const doc = await db.collection('products').doc(id).get()
        setEdit(bool)
        getProductById(id)
        //console.log(doc.data())
     }
     const goBack = ()=>{
         setEdit(false)
     }
    return (
        <>
           {
               !edit?(
                <Card style={{ width: '18rem',margin:'10px 0' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Subtitle style={{marginBottom:'10px'}}>${precio}</Card.Subtitle>
                        <section>
                        <Button  onClick={()=> editProductFunc(true,id)} style={{marginRight:'10px'}} variant="primary" className={'mr-4'}>Editar</Button>
                        <Button onClick={()=>deleteProducto(id)} variant="danger">Eliminar</Button>
                        </section>
                        
                    </Card.Body>
                </Card>):(<EditProduct productEdit={productEdit} id={id} goBack={goBack}/>)
           }     
        

        </>
    )
}

export default Producto
import { useState,useEffect } from "react"
import {db} from '../firebase/client'
import { Card,Button ,Form} from "react-bootstrap"
import { toast } from "react-toastify"

const EditProduct = ({productEdit,id,goBack})=>{


    const [product,setProduct] = useState(productEdit)

    useEffect(()=>{
        console.log('estas en el useeeeeeeeeeeeee')
        console.log(productEdit)
        setProduct(productEdit)
    },[productEdit])

    const updateProductFunc = async (product)=>{
        try{
            await db.collection('products').doc(id).update(product)
            toast('se guardo correctamente',{type:'success'})
        }catch(err){

        }
        
        
     } 

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(product)
        updateProductFunc(product)
        //setProduct({...initialState})
    }
    const handleInputChange = (e)=>{
        console.log(e.target.value)
        const {name , value} = e.target
        setProduct({...product,[name]:value})
    }
    return(
        <>
                <Form onSubmit={handleSubmit}> 
                    <Card style={{ width: '18rem',margin:'10px 0' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={handleInputChange}  type="text" name="image" value={product.image}  placeholder="Enter email" />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={handleInputChange}  type="text" name="name" value={product.name} />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={handleInputChange}  type="number" name="price" value={product.price} />
                            
                        </Form.Group>

                            <section>
                            <Button  type="submit" style={{marginRight:'10px'}} variant="primary" className={'mr-4'}>Guardar Cambios</Button>
                            <Button variant="danger" onClick={()=>goBack()}>Volver</Button>
                            </section>
                            
                        </Card.Body>
                    </Card>
                </Form>
        </>
    )
}

export default EditProduct
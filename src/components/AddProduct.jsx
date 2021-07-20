import { useState } from "react"
import { Link } from "react-router-dom"




const AddProduct = ({addProductFunc})=>{

    const initialState = {image:'',name:'',price:''}
    const [product,setProduct] = useState(initialState)

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(product)
        addProductFunc(product)
        setProduct({...initialState})
    }
    const handleInputChange = (e)=>{
        console.log(e.target.value)
        const {name , value} = e.target
        setProduct({...product,[name]:value})
    }
    return(
        <>
        <h1 style={{margin:'25px 0',textAlign:'center',lineHeight:'2'}}>Agregar producto</h1>


        <div  className=" mt-4" >
        <div className="card" style={{maxWidth:'500px',margin:'auto'}}>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="row">
                
                    {product.image !== '' && (<img style={{maxWidth:'300px'}} src={product.image} alt="imagen" className="rounded"/>)}
                
                </div>
                <div className="row">
                <div >
                    <div className="form-group">
                    <label>URL de la imagen</label>
                    <input style={{width:'90%'}} onChange={handleInputChange} className="form-control" type="text" name="image" value={product.image}/>
                    </div>
                </div>
                </div>
                <div className="row">
                <div >
                    <div className="form-group">
                    <label>Nombre del producto</label>
                    <input style={{width:'90%'}} onChange={handleInputChange} className="form-control" type="text" name="name" value={product.name}/>
                    </div>
                </div>
                </div>
                <div className="row">
                <div >
                    <div className="form-group">
                    <label>Precio</label>
                    <input style={{width:'90%'}} onChange={handleInputChange} className="form-control" type="number" name="price" value={product.price}/>
                    </div>
                </div>
                </div>
                <div className="row" style={{margin:'20px'}}>
                <div className="col-sm-12">
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{marginRight:'10px'}}>Guardar</button>
                    <Link to="/catalogoapi" className="btn btn-light">Volver</Link>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default AddProduct
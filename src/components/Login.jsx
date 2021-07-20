import ButtonLogin from "./ButtonLogin"
import SvgComponent from "./SvgGoogle"


const Login = ({handleClick})=>{
    return (
        <div className='vh-100 d-flex ' >
            <section className='m-auto d-flex flex-column align-items-center'>
            <img style={{width:'300px'}} src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo"/>
            <h3 style={{margin:'50px 0',fontWeight:'500'}}>Desafio FrontEnd</h3>     
            <ButtonLogin svg={<SvgComponent/>} className='btn btn-light rounded-pill' click={()=>handleClick()} text={'Ingresar con Google'}/>
            </section> 

        </div>
    )
}

export default Login
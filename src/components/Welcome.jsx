import { Card } from "react-bootstrap"

const Welcome = ({userName})=>{
    return (
        <>
        <div>
            <h1 style={{margin:'25px 0',textAlign:'center',lineHeight:'2'}}> Bienvenid@ <span style={{fontWeight:'bold',whiteSpace:'nowrap',background:'linear-gradient(270deg, #00e6b4 0%, rgba(255, 255, 255, 0) 100%), #f931f9',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{userName}</span> al desafio frontEnd</h1>
            <section>
                <h4 style={{margin:'25px 0',textAlign:'center',lineHeight:'2'}}>Desafio desarrollado con</h4>
                <ul style={{padding:'0',display:'flex',flexWrap:"wrap",justifyContent:'space-between'}}>
                    <li style={{listStyle:'none',margin:'20px auto'}}>  
                        <Card style={{padding:'20px 20px',maxWidth:'300px' ,display:'flex',flexDirection:'row',alignContent:'center'}}>
                            <Card.Img style={{width:"100px"}} src={'https://cdn.worldvectorlogo.com/logos/react-2.svg'}/>
                            <Card.Body style={{alignContent:'center'}}>
                                <Card.Title>
                                    React 
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </li>
                    <li style={{listStyle:'none',margin:'20px auto'}}>  
                        <Card style={{padding:'20px 20px',maxWidth:'300px' ,display:'flex',flexDirection:'row',alignContent:'center'}}>
                            <Card.Img style={{width:"100px"}} src={'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'}/>
                            <Card.Body style={{alignContent:'center'}}>
                                <Card.Title>
                                    Bootstrap 
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </li>
                    <li style={{listStyle:'none',margin:'20px auto'}}>  
                        <Card style={{padding:'20px 20px',maxWidth:'300px' ,display:'flex',flexDirection:'row',alignContent:'center'}}>
                            <Card.Img style={{width:"100px"}} src={'https://reacttraining.com/images/logo-icon-512.png'}/>
                            <Card.Body style={{alignContent:'center'}}>
                                <Card.Title>
                                    React Router
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </li>
                    <li style={{listStyle:'none',margin:'20px auto'}}>  
                        <Card style={{padding:'20px 20px',maxWidth:'300px' ,display:'flex',flexDirection:'row',alignContent:'center'}}>
                            <Card.Img style={{width:"100px"}} src={'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'}/>
                            <Card.Body style={{alignContent:'center'}}>
                                <Card.Title>
                                    Firebase 
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </li>
                    
                    
                </ul>
            </section>
        </div>
        
        </>
    )
}

export default Welcome
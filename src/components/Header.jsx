import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'

const Header = ()=>{
    return (
        <header>

            <Navbar bg="light" expand="lg">
        
            <Navbar.Brand href="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"><Link to="/"><img src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* <Link className="nav-link" to='/catalogo'>Catalogo</Link> */}
                            <Link className="nav-link" to='/catalogoapi'>Catalogo api</Link>
                            <Link className="nav-link" to='/agregarproducto'>Agregar producto</Link>
                
            </Nav>
            </Navbar.Collapse>
        
            </Navbar>

        </header>
    )
}

export default Header
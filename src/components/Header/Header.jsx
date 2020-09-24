import React, { Component } from 'react'
import { Bgred, Bggreen } from './Header.styled'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
// import { FormControl } from '@material-ui/core'

export default class Header extends Component{
    render(){     
        return(
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Alexandria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Arquitetura</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Arte</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Livro</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Outros</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Contribuir</Nav.Link>
                            <Nav.Link href="#link">História</Nav.Link>
                            <Nav.Link href="#link">Nosso Time</Nav.Link>
                        </Nav>

                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}
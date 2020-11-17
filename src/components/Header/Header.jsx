import React, { Component } from 'react'
import { WrapperHeader, HeaderGrid, Logo } from './header.styled'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'

import { Link } from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <header>
        <WrapperHeader>
          <Navbar bg="light" expand="md">
            <div className="container">
              <HeaderGrid>
                <Navbar.Brand>
                  <Logo>
                    <Link to="/">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/alexandria-logo.png`} alt=""/>
                    </Link>
                  </Logo>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                      <NavDropdown.Item><Link to="/arquitetura">Arquitetura</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/arte">Arte</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/livro">Livro</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Link to="/outros">Outros</Link></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Contribuir" id="contribuirs">
                      <NavDropdown.ItemText>Faça uma contribuiçao de:</NavDropdown.ItemText>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Link to="/cadastro/arquitetura">Arquitetura</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/arte">Arte</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/livro">Livro</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/outros">Outros</Link></NavDropdown.Item>
                    </NavDropdown>

                    {/* <Nav.Link><Link to="/linha-do-tempo">Linha do Tempo</Link></Nav.Link>
                    <Nav.Link><Link to="/historia">História</Link></Nav.Link>
                    <Nav.Link><Link to="/time">Nosso Time</Link></Nav.Link> */}
                  </Nav>

                  {/* <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Navbar.Collapse>
              </HeaderGrid>
            </div>
          </Navbar>
        </WrapperHeader>
      </header>
    )
  }
}
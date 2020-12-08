import React, { Component } from 'react'
import { WrapperHeader, HeaderGrid, Logo, Login } from './header.styled'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'
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
                    <NavDropdown title="categorias" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'arquitetura',
                          }
                        }}>arquitetura</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'arte',
                          }
                        }}>arte</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={{
                          pathname: "/busca-completa",
                          paramsBusca: {
                            search: null,
                            tipo: 'tipo',
                            categoria: 'livro',
                          }
                        }}>livro</Link>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="contribuir" id="contribuirs">
                      <NavDropdown.ItemText>Faça uma contribuiçao de:</NavDropdown.ItemText>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Link to="/cadastro/arquitetura">arquitetura</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/arte">arte</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/livro">livro</Link></NavDropdown.Item>
                    </NavDropdown>

                    {
                      localStorage.getItem('username').length > 0 ? (
                        <Link to="/login">
                          <Login>
                            <MaterialIcon icon="account_circle" size={27} color="#ff3366" />
                            <span>login</span>
                          </Login>
                        </Link>
                      ) : (
                        <Link to="/dashboard">
                          <Login>
                            <MaterialIcon icon="account_circle" size={27} color="#ff3366" />
                            <span>{localStorage.getItem('username')}</span>
                          </Login>
                        </Link>
                      )
                    }



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
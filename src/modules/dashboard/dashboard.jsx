import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MaterialIcon from 'material-icons-react'
import Button from 'react-bootstrap/Button'
import { Nav, NavDropdown } from 'react-bootstrap'

import { Banner, Wrapper, Title, Msg, MyProdutos, WrapperProduto, Card, ImgMyProdutos, BoxMyProdutosInfo, BoxMyProdutosTitle, WrapperCategoria, WrapperButtons, EditarButton, DeleteButton  } from './dashboard.styled'


import { getMyProdutos } from '../../utils/services/dashboard/my-produtos.service'
import { deleteProduto } from '../../utils/services/deletar/deletar.service'


const initialState = {
  myProdutosService: Object,
  showMyProdutos: false,
}

export default class Dashboard extends Component {
  state = { ...initialState }

  componentDidMount() {
    getMyProdutos().then((response) => {
      this.setState({
        myProdutosService: response,
        showMyProdutos: true
      })
    })
  }

  constructor() {
    super()
  }

  deleteProduto(id, titulo){
    deleteProduto(id).then((response) => {
      if(response === 200){
        alert('a contribuição ' + titulo + ' foi deletada com sucesso', response )
        this.componentDidMount()
      }
    })
  }

  render() {
    const { myProdutosService, showMyProdutos } = this.state;

    return (
      <Wrapper>
        <Banner>
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <Title>que bom te ver por aqui <span>{localStorage.getItem('username')}</span>!<br/> Sua contribuição é muito importante para que materiais inestimáveis não sejam perdidos :)</Title>

                <Button type="button" variant="primary">
                  <Nav>
                    <NavDropdown title="nova contribuição" id="contribuirs">
                      <NavDropdown.ItemText>Faça uma contribuiçao de:</NavDropdown.ItemText>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Link to="/cadastro/arquitetura">arquitetura</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/arte">arte</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to="/cadastro/livro">livro</Link></NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Button>
              </div>
            </div>
          </div>
        </Banner>

        <div className="container"> 
          { myProdutosService[0] !== undefined &&
            <div className="col-md-12">
              { myProdutosService[0] !== undefined && 
                <div>
                  <h4>minhas contribuições</h4>
                  {myProdutosService.length > 1 ? (
                    <span>você tem {myProdutosService.length} itens cadastrados</span>
                  ):(
                    <span>você tem {myProdutosService.length} item cadastrado</span>
                  )}
                </div>
              }
              <MyProdutos>                
                { showMyProdutos && ( 
                  <div className="row">
                    { myProdutosService.map(myProdutos => (
                      <WrapperProduto className="col-md-4">
                        <Card>
                          <Link key={ myProdutos.id_prod } to={{
                            pathname: "/" + myProdutos.categoria,
                            paramsProduct: {
                              id: myProdutos.id_prod,
                              categoria: myProdutos.categoria,
                            }
                            }}>
                            <div className="padding-card">
                              <ImgMyProdutos>
                                <img src={`${process.env.PUBLIC_URL + myProdutos.img.path_img}`} alt=""/>
                              </ImgMyProdutos>
                              <BoxMyProdutosInfo>
                                <BoxMyProdutosTitle>{ myProdutos.titulo }</BoxMyProdutosTitle>
                                <span>{ myProdutos.autor }</span>
                              </BoxMyProdutosInfo>
                              
                              <span>
                                <MaterialIcon icon="room" size={17} color="#444444" />
                                { myProdutos.localidade }
                              </span>

                              <WrapperCategoria categoria={ myProdutos.categoria }>
                                <span>{ myProdutos.categoria }</span>

                                {
                                  myProdutos.categoria == "arquitetura" &&
                                  <MaterialIcon icon="apartment" size={20} color="#fff" />
                                }{
                                  myProdutos.categoria == "livro" &&
                                  <MaterialIcon icon="chrome_reader_mode" size={20} color="#fff" />
                                }{
                                  myProdutos.categoria == "arte" &&
                                  <MaterialIcon icon="widgets" size={20} color="#fff" />
                                }
                              </WrapperCategoria>
                            </div>
                          </Link>

                          <hr/>

                          <WrapperButtons>
                            <Link key={ myProdutos.id_prod } to={{
                              pathname: "editar/" + myProdutos.categoria,
                              paramsProduct: {
                                id: myProdutos.id_prod,
                                categoria: myProdutos.categoria,
                              }
                            }}>
                              <EditarButton>
                                <MaterialIcon icon="create" size={18} color="#444444" />
                                editar
                              </EditarButton>
                            </Link>

                            {
                              localStorage.getItem('role') === 'admin' &&
                                <DeleteButton onClick={() => this.deleteProduto(myProdutos.id_prod, myProdutos.titulo)}>
                                  <MaterialIcon icon="delete" size={18} color="#ad2323" />
                                  deletar
                                </DeleteButton>
                            }
                          </WrapperButtons>

                        </Card>
                      </WrapperProduto>
                    ))}
                  </div>
                )}

              </MyProdutos>
            </div>
          }

          <Msg className="col-md-12">
            {myProdutosService[0] === undefined && 
              <span>por enquanto você não tem nenhuma contribuição :/</span>
            }
          </Msg>
        </div>
      </Wrapper>
    )
  }
}
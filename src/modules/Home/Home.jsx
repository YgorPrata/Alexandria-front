import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

import { 
  Banner,
  SearchTitle, 
  BannerEnd, 
  BannerEndTitle,
  Novidade, 
  Card, 
  NovidadeTitle, 
  Categoria, 
  CategoriaTitle, 
  ImgNovidade, 
  BoxNovidadeInfo, 
  CategoriaBox, 
  BoxNovidadeTitle,
  ButtonSearch,
  WrapperSearch,
  WrapperSearchImg,
  WrapperCategoria,
  SearchItem,
  CategoriaDescription } from './Home.styled'

  
import { Link } from "react-router-dom"

import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

import { getProdutoSimples } from '../../utils/services/produtoSimples.service'


const initialState = {
  produtoSimples: '',
  searchValue: '',
  categoria: '',
  tipo: '',
  typeSearch: 'tipo',
  categoriaSearch: 'categoria',
  activeSearch: false,
  disableButton: true,
  seachNotFound: false,
}

export default class Home extends Component {
  state = { ...initialState }

  // componentDidMount() {
  //   this.setState({ produtoSimples: })
  // }

  constructor(props) {
    super(props)

    this.setTypeSearch = this.setTypeSearch.bind(this)
    this.setCategoriaSearch = this.setCategoriaSearch.bind(this)
  }

  searchProduct(value, tipo, categoria, limite){ 
    getProdutoSimples(value, tipo, categoria, limite).then((response) => {
      typeof response === 'object' ? (
        this.setState({ 
          produtoSimples: response, 
          activeSearch: true,
          seachNotFound: false 
        })
      ) : (
        this.setState({ 
          produtoSimples: '',
          activeSearch: false,
          seachNotFound: true  
        })
      )
    })
  }
  
  getInputValue(value){
    this.setState({ 
      searchValue: value,
      disableButton: value.length > 2 ? false : true
    })
  }

  setTypeSearch(typeSearch) {
    this.setState({
      typeSearch: typeSearch,
    })
  }

  setCategoriaSearch(categoriaSearch) {
    this.setState({
      categoriaSearch: categoriaSearch,
    })
  }

  render() {
    const { 
      produtoSimples, 
      searchValue,
      typeSearch,
      categoriaSearch, 
      activeSearch,
      disableButton,
      seachNotFound } = this.state;

    return (
      <div>
        <Banner>
          <div className="container">
            <SearchTitle>Encontre entre <span>20.000</span> itens de material inestimável para humanidade</SearchTitle>
            <InputGroup>
              <FormControl
                placeholder="arquitetura, artes, literaturas ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={ () => this.getInputValue(event.target.value) }
              />

              <DropdownButton id="dropdown-item-button" title={typeSearch} as={InputGroup.Append}>
                <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item
                  as="button"
                  value="titulo"
                  id="titulo"
                  onClick={() => this.setTypeSearch(event.target.value)}>
                  titulo</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="autor"
                  onClick={() => this.setTypeSearch(event.target.value)}>
                  autor</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="localidade"
                  onClick={() => this.setTypeSearch(event.target.value)}>
                  localidade</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="tudo"
                  onClick={() => this.setTypeSearch(event.target.value)}>
                  tudo</Dropdown.Item>
              </DropdownButton>

              <DropdownButton id="dropdown-item-button" title={categoriaSearch} as={InputGroup.Append}>
                <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item
                  as="button"
                  value="arquitetura"
                  onClick={() => this.setCategoriaSearch(event.target.value)}>
                  arquitetura</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="arte"
                  onClick={() => this.setCategoriaSearch(event.target.value)}>
                  arte</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="livro"
                  onClick={() => this.setCategoriaSearch(event.target.value)}>
                  livro</Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  value="tudo"
                  onClick={() => this.setCategoriaSearch(event.target.value)}>
                  tudo</Dropdown.Item>
              </DropdownButton>

              <ButtonSearch>
                <Button 
                  type="button" 
                  disabled={ disableButton } 
                  onClick={() => this.searchProduct(searchValue, typeSearch, categoriaSearch, 3)}>
                  <MaterialIcon icon="search" size={21} color="#fff" />
                </Button>
              </ButtonSearch>
            </InputGroup>

            <WrapperSearch className="box-scroll-bar">
              {
                activeSearch && ( produtoSimples.map(produto => 

                  <Link key={ produto.id_prod } to={{
                    pathname: "/arquitetura",
                    paramsProduct: {
                      id: produto.id_prod,
                      categoria: produto.categoria,
                    }
                  }}>
                    <SearchItem>

                      <WrapperSearchImg>
                        <img src={`${process.env.PUBLIC_URL + produto.img.path_img}`} />
                      </WrapperSearchImg>

                      <div>
                        <div>{ produto.titulo }</div>
                        <div>{ produto.autor }</div>
                      </div>
                      <WrapperCategoria categoria={ produto.categoria }>
                        <span>{ produto.categoria }</span>

                        {
                          produto.categoria == "arquitetura" &&
                          <MaterialIcon icon="apartment" size={20} color="#37e29b" />
                        }{
                          produto.categoria == "livro" &&
                          <MaterialIcon icon="chrome_reader_mode" size={20} color="#e24f37" />
                        }{
                          produto.categoria == "arte" &&
                          <MaterialIcon icon="widgets" size={20} color="#37d2e2" />
                        }
                      </WrapperCategoria>
                    </SearchItem>
                  </Link>
                ))
              }
              {
                seachNotFound && (
                  <SearchItem>
                    Não escontramos nenhum item para sua busca :/
                  </SearchItem>
                )
              }

            </WrapperSearch>

          </div>
        </Banner>

        <Novidade>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <NovidadeTitle>Novidades por aqui</NovidadeTitle>

                <div className="row">
                  <div className="col-md-6">
                    <Card>
                      <ImgNovidade>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/11.jpg`} alt=""/>
                      </ImgNovidade>
                      <BoxNovidadeInfo>
                        <BoxNovidadeTitle>Museu do Amanhã</BoxNovidadeTitle>
                        <div>2017</div>
                        <div>Santiago Calatrava</div>
                      </BoxNovidadeInfo>

                    </Card>
                  </div>
                  <div className="col-md-6">
                    <Card>blá blá</Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Novidade>

        <Categoria>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <CategoriaTitle>Pricipais categorias</CategoriaTitle>

                <div className="row">
                  <div className="col-md-4">
                    <Card>
                      <CategoriaBox>
                        <MaterialIcon icon="apartment" size={37} color="#ff3366" />
                        <h4>Arquitetura</h4>
                        <CategoriaDescription>morumentos históricos, museus, grandes contruções, prédios modernos e obras primas arquitetônicas</CategoriaDescription>
                      </CategoriaBox>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card>
                      <CategoriaBox>
                        <MaterialIcon icon="chrome_reader_mode" size={35} color="#ff3366" />
                        <h4>Literatura</h4>
                        <CategoriaDescription>suspense, românce, drama, ficção e o que mais imaginar</CategoriaDescription>
                      </CategoriaBox>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card>
                      <CategoriaBox>
                        <MaterialIcon icon="widgets" size={35} color="#ff3366" />
                        <h4>Arte</h4>
                        <CategoriaDescription>obras inetimáveis para a humanidade passando desde o renascentismo ao surealismo de pinturas rupestres a esculturas de mármore</CategoriaDescription>
                      </CategoriaBox>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Categoria>

        <BannerEnd>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <BannerEndTitle>Faça parte da comunidade Alexandria também! </BannerEndTitle>
                <BannerEndTitle>Compartilhe o seu conhecimento para o mundo :)</BannerEndTitle>

                <Button type="button" variant="secondary">
                  Contribuir
                </Button>
              </div>
            </div>
          </div>
        </BannerEnd>

      </div>
    )
  }
}
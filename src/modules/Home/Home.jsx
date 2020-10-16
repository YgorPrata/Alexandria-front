import React, { Component } from 'react'
import { Banner, Search } from './Home.styled'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

// import FourKIcon from '@material-ui/icons/FourK'
// import { makeStyles } from '@material-ui/core/styles'

const initialState = {
  typeSearch: 'Tipo',
  placeholderTipo: 'Encontre Arquitetura, Artes, livros ...',
  placeholderCategoria: '',
  categoria: 'Categoria'
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//     color: theme.palette.text.primary,
//     },
// }));

export default class Home extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props)

    this.setTypeSearch = this.setTypeSearch.bind(this)
  }

  setTypeSearch(typeSearch) {
    var type
    var placeholder

    if (typeSearch == 'Nome') {
      type = typeSearch
      placeholder = 'Pesquise um nome ...'
    }
    if (typeSearch == 'Autor') {
      type = typeSearch
      placeholder = 'Pesquise um Autor ...'
    }
    if (typeSearch == 'Ano') {
      type = typeSearch
      placeholder = 'Pesquise um Ano ...'
    }
    if (typeSearch == 'Tudo') {
      type = 'Tipo'
      placeholder = 'Encontre Arquitetura, Artes, livros ...'
    }

    this.setState({
      typeSearch: type,
      placeholderTipo: placeholder
    })
  }

  setCategoria(categoria) {
    var categ
    var placeholder

    if (categoria == 'Arquitetura') {
      categ = categoria
      placeholder = 'Pesquise um nome ...'
    }
    if (categoria == 'Arte') {
      categ = categoria
      placeholder = 'Pesquise um Autor ...'
    }
    if (categoria == 'Livro') {
      categ = categoria
      placeholder = 'Pesquise um Ano ...'
    }
    if (categoria == 'Tudo') {
      categ = 'Categoria'
      placeholder = 'Encontre Arquitetura, Artes, livros ...'
    }

    this.setState({
      categoria: categ,
      placeholderCategoria: placeholder
    })
  }

  render() {
    // const styleIcon = useStyles()

    return (
      <Banner>
        <Search className="container">
          <p>Encontre entre "x" itens</p>
          <InputGroup>
            <FormControl
              placeholder={this.state.placeholderTipo + this.state.placeholderCategoria}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <DropdownButton id="dropdown-item-button" title={this.state.typeSearch} as={InputGroup.Append}>
              <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
              <Dropdown.Divider />
              <Dropdown.Item
                as="button"
                value="Nome"
                onClick={() => this.setTypeSearch(event.target.value)}>
                Nome</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Autor"
                onClick={() => this.setTypeSearch(event.target.value)}>
                Autor</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Ano"
                onClick={() => this.setTypeSearch(event.target.value)}>
                Ano</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Tudo"
                onClick={() => this.setTypeSearch(event.target.value)}>
                Tudo</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-item-button" title={this.state.categoria} as={InputGroup.Append}>
              <Dropdown.ItemText>Filtrar por:</Dropdown.ItemText>
              <Dropdown.Divider />
              <Dropdown.Item
                as="button"
                value="Arquitetura"
                onClick={() => this.setCategoria(event.target.value)}>
                Arquitetura</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Arte"
                onClick={() => this.setCategoria(event.target.value)}>
                Arte</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Livro"
                onClick={() => this.setCategoria(event.target.value)}>
                Livro</Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="Tudo"
                onClick={() => this.setCategoria(event.target.value)}>
                Tudo</Dropdown.Item>
            </DropdownButton>

            <Button type="submit">Pesquisa</Button>
          </InputGroup>

        </Search>
      </Banner>
    )
  }
}
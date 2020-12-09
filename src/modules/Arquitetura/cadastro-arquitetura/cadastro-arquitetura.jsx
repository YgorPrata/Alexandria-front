import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { SaveArquitetura } from '../../../utils/services/cadastro/arquitetura-cadastro.service'


var array = [1]
export default class CadastroArquitetura extends Component{
  state = {
    titulo: null,
    autor: null,
    descricao: null,
    tipo: null,
    localidade: null,
    ano: null,
    curador: null,
    area: null,
    img: null,
    desc_img: null,
    img2: null,
    desc_img2: null,
    validated: false,
    listImages: null,
    listDescImages: null,
    loadpage: false,
    arrayButton: [1]
  }

  constructor() {
    super();
  }

  componentDidMount() {
    if(localStorage.getItem('username') === null){
      alert('você precisa estar logado para acessar essa página')
      location.href = "/login"
    }
    else{
      this.setState({
        loadpage: true
      })
    }
  }

  onSubmit = e => {
    e.preventDefault();
    
    const state = this.state
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.setState({
      validated: true
    })

    if(this.state.ano !== '' && this.state.ano !== null 
      && this.state.autor !== '' && this.state.autor !== null
      && this.state.descricao !== '' && this.state.descricao !== null
      && this.state.desc_img !== '' && this.state.desc_img !== null
      && this.state.localidade !== '' && this.state.localidade !== null
      && this.state.tipo !== '' && this.state.tipo !== null
      && this.state.titulo !== '' && this.state.titulo !== null
      && this.state.area !== '' && this.state.area !== null
      && this.state.curador !== '' && this.state.curador !== null){
        const body = new FormData(this.form)
        var listImgDesc = ''

        array.map((e, index) => {
          if(array.length === index + 1){
            listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"}'  
          }
          else{
            listImgDesc += '{"desc_img": "' + document.getElementsByClassName('desc_img_itens')[index].value + '"},'
          }
        }) 

        body.append("arq", 
        '{' + 
          '"categoria": "arquitetura",' +
          '"ano": ' + state.ano  + ',' +
          '"autor": "' + state.autor  + '",' +
          '"descricao": "' + state.descricao  + '",' +
          '"listImg": [' + 
            listImgDesc +
          '],' +
          '"localidade": "' + state.localidade  + '",' +
          '"tipo": "' + state.tipo  + '",' +
          '"titulo": "' + state.titulo  + '",' + 
          '"area": ' + state.area  + ',' +
          '"curador": "' + state.curador +
        '"}'
        )
    
        SaveArquitetura(body).then((response) => {
          if(response === 201){
            alert('cadastro realizado com sucesso! Obrigado por sua contribuição :)')
          }
        })
    }
  }

  addMoreImgs(){
    if(array.length <= 20){
      array.push(1)
      this.setState({
        arrayButton: array
      })
    } else {
      alert('só é permitido adicionar 20 imagens')
    }
  }

  removeLastImgs() {
    array.pop()
    this.setState({
      arrayButton: array
    })
  }

  render(){
    const {
      titulo,
      autor,
      descricao,
      tipo,
      localidade,
      ano,
      curador,
      area,
      desc_img,
      desc_img2,
      validated,
      loadpage,
      arrayButton,
    } = this.state

    return(
      <div className="container">
        { loadpage && (
          <div className="row">
            
            <div className="col-md-12">
              <h2>Cadastro Arquitetura</h2>

              <Form noValidate validated={validated} onSubmit={this.onSubmit} ref={el => (this.form = el)}>
                <Form.Group 
                  controlId="titulo"
                  value={titulo}
                  onChange={e => this.setState({ titulo: e.target.value })}>
                  <Form.Label>título</Form.Label>
                  <Form.Control required type="text" />

                  <Form.Control.Feedback type="invalid">
                    insira um título
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="autor"
                  value={autor}
                  onChange={e => this.setState({ autor: e.target.value })}>
                  <Form.Label>autor</Form.Label>
                  <Form.Control required type="text" />

                  <Form.Control.Feedback type="invalid">
                    insira um autor
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="descricao"
                  value={descricao}
                  onChange={e => this.setState({ descricao: e.target.value })}>
                  <Form.Label>descrição</Form.Label>
                  <Form.Control required as="textarea" rows={3} />

                  <Form.Control.Feedback type="invalid">
                    insira uma descrição
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="tipo"
                  value={tipo}
                  onChange={e => this.setState({ tipo: e.target.value })}>
                  <Form.Label>tipo de construção</Form.Label>
                  <Form.Control required as="select" size="md">
                    <option></option>
                    <option>alvenaria convencional</option>
                    <option>blocos de pedra</option>
                    <option>construção</option>
                    <option>construção moderna</option>
                    <option>construção em maderia</option>
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    insira um tipo de construção
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="localidade"
                  value={localidade}
                  onChange={e => this.setState({ localidade: e.target.value })}>
                  <Form.Label>localização da construção</Form.Label>
                  <Form.Control required type="text" />

                  <Form.Control.Feedback type="invalid">
                    insira uma localidade
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="ano"
                  value={ano}
                  onChange={e => this.setState({ ano: e.target.value })}>
                  <Form.Label>ano da construção</Form.Label>
                  <Form.Control required type="number"  />

                  <Form.Control.Feedback type="invalid">
                    insira o ano de construção
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="curador"
                  value={curador}
                  onChange={e => this.setState({ curador: e.target.value })}>
                  <Form.Label>curador da construção</Form.Label>
                  <Form.Control required type="text" />

                  <Form.Control.Feedback type="invalid">
                    insira um curador da construção
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group 
                  controlId="area"
                  value={area}
                  onChange={e => this.setState({ area: e.target.value })}>
                  <Form.Label>área da construção</Form.Label>
                  <Form.Control required type="number" />

                  <Form.Control.Feedback type="invalid">
                    insira uma área da construção
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="row">
                  {arrayButton.map((e, index) => (
                    <div className="col-md-6">
                      <h5>imagem {index + 1}</h5>
                      <Form.Group>
                        <Form.File  custom>
                          <Form.File.Input 
                          controlId="img"
                          isValid
                          required
                          name="img" />
                          <Form.File.Label 
                            data-browse="adicionar">
                            adicione uma imagem
                          </Form.File.Label>

                          <Form.Control.Feedback type="invalid">
                            insira uma imagem
                          </Form.Control.Feedback>
                        </Form.File>
                      </Form.Group>

                      <Form.Group 
                        controlId="desc_img"
                        value={desc_img}
                        onChange={e => this.setState({ desc_img: e.target.value })}>
                        <Form.Label>descrição da imagem</Form.Label>
                        <Form.Control required as="textarea" 
                        className="desc_img_itens" rows={3} />

                        <Form.Control.Feedback type="invalid">
                          insira uma descrição para sua imagem
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  ))}
                </div>

                
                <span>você adicionou {array.length} imagens</span>

                <Button type="button" variant="primary" onClick={() => this.addMoreImgs()}>
                  <MaterialIcon icon="add_photo_alternate" size={18
                  } color="#fff" />
                  adicionar mais imagens
                </Button>

                {array.length > 1 &&
                  <Button type="button" variant="primary" onClick={() => this.removeLastImgs()}>
                    <MaterialIcon icon="add_photo_alternate" size={18
                    } color="#fff" />
                    remover última imagem
                  </Button>
                }

                <br/>

                <Button type="submit" variant="primary">
                  cadastrar
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    )
  }
}
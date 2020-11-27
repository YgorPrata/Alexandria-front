import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { SaveArquitetura } from '../../../utils/services/cadastro/arquitetura-cadastro.service'
export default class CadastroArquitetura extends Component{
  state = {
    categoria: 'arquitetura',
    titulo: String,
    autor: String,
    descricao: String,
    tipo: String,
    localizacao: String,
    ano: Number,
    curador: String,
    area: Number,
    img: [],
    descricaoImg: String,
    fileImg: HTMLInputElement,
    fileDesc: String,
  }

  constructor(props){
    super(props)
    this.state.fileImg = HTMLInputElement;
  }

  save (){

    const objToSave = {
      // categoria:  this.state.categoria,
      // titulo:  this.state.titulo,
      // autor:  this.state.autor,
      // descricao:  this.state.descricao,
      // tipo:  this.state.tipo,
      // localizacao:  this.state.localizacao,
      // ano:  parseInt(this.state.ano),
      // curador:  this.state.curador,
      // area: parseInt(this.state.area),
      
      // fileImg: this.state.fileImg,
      // fileDesc: this.state.fileDesc,
      


      ano: 6,
      area: 5,
      autor: "Ygor Autor",
      categoria: "arquitetura",
      curador: "uuuuuuuu",
      descricao: "cewcwec",
      localizacao: "São Paulo",
      tipo: "alvenaria convencional",
      titulo: "ssss",

      listImg: [
        {
          desc_img: "desc2 update",
          id_img: 1,
          path_img: this.state.fileImg
        },
      ]
    }


    SaveArquitetura(objToSave).then((response) => {
      console.log('eeeee', response)
    })
    
    console.log('obj', this.state.fileImg)
  }

  // teste(val){
  //   this.setState({ 
  //     fileImg: val,
  //   })
  // }

  render(){
    const { 
      titulo,
      autor,
      descricao,
      tipo,
      localizacao,
      ano,
      curador,
      area,
      fileImg,
      fileDesc,
    } = this.state

    return(
      <div>
        Cadastro Arquitetura

        <h4 onClick={() => this.save()}>click</h4>

        <Form>
          <Form.Group 
            controlId="titulo" 
            value={titulo}
            onChange={e => this.setState({ titulo: e.target.value })}>
            <Form.Label>título</Form.Label>
            <Form.Control type="text" placeholder="adicione um título" />
          </Form.Group>

          <Form.Group 
            controlId="autor"
            value={autor}
            onChange={e => this.setState({ autor: e.target.value })}>
            <Form.Label>autor</Form.Label>
            <Form.Control type="text" placeholder="adicione um autor" />
          </Form.Group>

          <Form.Group 
            controlId="descricao"
            value={descricao}
            onChange={e => this.setState({ descricao: e.target.value })}>
            <Form.Label>descrição</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group 
            controlId="tipo"
            value={tipo}
            onChange={e => this.setState({ tipo: e.target.value })}>
            <Form.Label>tipo</Form.Label>
            <Form.Control as="select" size="md">
              <option></option>
              <option>alvenaria convencional</option>
              <option>blocos de pedra</option>
              <option>construção</option>
              <option>construção moderna</option>
              <option>construção em maderia</option>
            </Form.Control>
          </Form.Group>

          <Form.Group 
            controlId="localizacao"
            value={localizacao}
            onChange={e => this.setState({ localizacao: e.target.value })}>
            <Form.Label>localização da construção</Form.Label>
            <Form.Control type="text" placeholder="adicione um local da construção" />
          </Form.Group>

          <Form.Group 
            controlId="ano"
            value={ano}
            onChange={e => this.setState({ ano: e.target.value })}>
            <Form.Label>ano da construção</Form.Label>
            <Form.Control type="number" placeholder="adicione um ano da construção" />
          </Form.Group>

          <Form.Group 
            controlId="curador"
            value={curador}
            onChange={e => this.setState({ curador: e.target.value })}>
            <Form.Label>curador da construção</Form.Label>
            <Form.Control type="text" placeholder="adicione um curador da construção" />
          </Form.Group>

          <Form.Group 
            controlId="area"
            value={area}
            onChange={e => this.setState({ area: e.target.value })}>
            <Form.Label>área da construção</Form.Label>
            <Form.Control type="number" placeholder="adicione uma área da construção" />
          </Form.Group>


          {/* <Form.Group>
            <Form.File id="file1" label="imagem pricipal" />
            <Form.Text className="text-muted">
              adicione uma fotografia principal da arquitetura. Procure fotografias tiradas em hanbientes bem iluminados e com bom enquadramento :)
            </Form.Text>
          </Form.Group> */}



          <Form.Group>
            <Form.Label>imagem principal</Form.Label>
            <Form.File id="file1" custom>
              <Form.File.Input 
              isValid 
              value={fileImg} 
              onChange={() => this.setState({ fileImg: event.target.value })} />
              <Form.File.Label 
                data-browse="adicionar">
                adicione uma imagem principal
              </Form.File.Label>
              <Form.Control.Feedback type="valid">imagem adicionada com sucesso :)</Form.Control.Feedback>
            </Form.File>
          </Form.Group>
          
          
          <input type="file" ref={this.fileInput} />

          <Form.Group 
            controlId="file1-desc"
            value={fileDesc}
            onChange={e => this.setState({ fileDesc: e.target.value })}>
            <Form.Label>descrição da imagem</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

        </Form>
      </div>
    )
  }
}
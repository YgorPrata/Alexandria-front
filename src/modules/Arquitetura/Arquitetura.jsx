import React, { Component } from 'react'

import { produtoArquitetura } from '../../utils/services/Produtos.service'
import { Wrapper, WrapperHeader, BoxHeader, Titulo, Descricao, BoxImg } from './Arquitetura.styled'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default class Arquitetura extends Component {
  state = {
    arquitetura: {},
  }

  componentDidMount() {
    produtoArquitetura.then((response) => {
      this.setState({ arquitetura: response })
    })
  }

  render() {
    const { arquitetura } = this.state;

    return (
      <Wrapper>
        <div className="row">
          <div className="col-md-3"><BoxImg></BoxImg></div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <Titulo>{arquitetura.nome}</Titulo>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <WrapperHeader>
                  <span>autor</span>
                  <BoxHeader>{arquitetura.autor}</BoxHeader>
                </WrapperHeader>
                <WrapperHeader>
                  <span>tipo</span>
                  <BoxHeader>{arquitetura.tipo}</BoxHeader>
                </WrapperHeader>
                <WrapperHeader>
                  <span>ano</span>
                  <BoxHeader>{arquitetura.ano}</BoxHeader>
                </WrapperHeader>
              </div>
              <div className="col-md-6">
                <WrapperHeader>
                  <span>categoria</span>
                  <BoxHeader>{arquitetura.categoria}</BoxHeader>
                </WrapperHeader>
              </div>
            </div>
          </div>
        </div>
          <Descricao>{ReactHtmlParser(arquitetura.descricao)}</Descricao>
          <div>{arquitetura.material}</div>
          <div>{arquitetura.id_arq}</div>
      </Wrapper>
    )
  }
}


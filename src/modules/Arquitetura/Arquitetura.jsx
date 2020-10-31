import React, { Component } from 'react'

import { getArquitetura } from '../../utils/services/arquitetura.service'
import { Wrapper, WrapperHeader, BoxHeader, Titulo, Descricao, BoxImg, BannerEnd, BannerEndTitle } from './Arquitetura.styled'

import ReactHtmlParser from 'react-html-parser'

import { withRouter} from 'react-router-dom'
import queryString from 'query-string'
import Button from 'react-bootstrap/Button'
import Carrossel from '../../components/carroussel/carroussel.component'

class Arquitetura extends Component {

  state = {
    arquitetura: {},
    imageList: [],
  }

  componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);

    if('paramsProduct' in this.props.location){
      this.props.history.push('?id=' + this.props.location.paramsProduct.id)
      getArquitetura(this.props.location.paramsProduct.id).then((response) => {
        this.setState({ arquitetura: response })
      })
    }
    else{
      if('id' in params){
        getArquitetura(params.id).then((response) => {
          this.setState({ arquitetura: response, imageList: response.listImg.map(e => e.path_img) })
          console.log('dd', response.listImg[0])
        })
      }
      else{
        this.props.history.push('/');
      }
    }
  }

  render() {
    const { arquitetura, imageList } = this.state;

    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              { imageList.map(image =>
                <BoxImg>
                  <img src={`${process.env.PUBLIC_URL + image}`} />
                </BoxImg>
              )}
            </div>
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
                  <WrapperHeader>
                    <span>localidade</span>
                    <BoxHeader>{arquitetura.localidade}</BoxHeader>
                  </WrapperHeader>
                </div>
              </div>
            </div>
          </div>
          <Descricao>{ReactHtmlParser(arquitetura.descricao)}</Descricao>
          <h4>Lista de imagens</h4>

          <Carrossel></Carrossel>
        </div>

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
      </Wrapper>
    )
  }
}

export default withRouter(Arquitetura)

import React, { Component } from 'react'

import { produtoArquitetura }  from '../../utils/services/Produtos.service'

export default class Arquitetura extends Component{
    state = {
        arquitetura: {},
    }

    componentDidMount() {
        produtoArquitetura.then((response) => {
            this.setState({ arquitetura: response })
        })
    }

    render(){        
        const { arquitetura } = this.state;

        return(
            <div>
                <br /><br /><br />
                <div>{arquitetura.nome}</div>
                <div>{arquitetura.autor}</div>
                <div>{arquitetura.categoria}</div>
                <div>{arquitetura.material}</div>
                <div>{arquitetura.tipo}</div>
                <div>{arquitetura.descricao}</div>
                <div>{arquitetura.data}</div>
                <div>{arquitetura.id_arq}</div>
            </div>
        )
    }
}
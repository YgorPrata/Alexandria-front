import React, { Component } from 'react'

import { arquitetura }  from '../../utils/services/Produtos.service'

export default class Home extends Component{
    state = {
        arquiteturas: {},
    }

    componentDidMount() {
        arquitetura.then((response) => {
            this.setState({ arquiteturas: response })
        })
    }

    render(){        
        const { arquiteturas } = this.state;

        return(
            <div>
                Home
                {console.log('teste', arquiteturas)}
            </div>
        )
    }
}
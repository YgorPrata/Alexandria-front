import React, { Component } from 'react'

import { produtoArquitetura } from '../../utils/mock/_index'
import  {api}  from '../../utils/api/api'

export default class Home extends Component{
    state = {
        artigos: {},
    }

    async componentDidMount() {
        const response = await api.get() + 'produtos/artigos';

        this.setState({ artigos: response.data });
    }

    render(){        
        const { artigos } = this.state;

        return(
            <div>
                Home
                        
                {console.log(produtoArquitetura)}
                {console.log(artigos)}
                
            </div>
        )
    }
}
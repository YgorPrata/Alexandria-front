import {
    produtoArquitetura,
    produtoArte, 
    produtoLivro, 
    produtosSimples } from '../mock/_index'

import axios from 'axios'
import { baseUrl } from '../../utils/api/api'

export const arquitetura = axios.get(baseUrl + 'app/produto/arquitetura')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })

export const livro = axios.get(baseUrl + 'app/produto/livro')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })

export const arte = axios.get(baseUrl + 'app/produto/arte')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
    

// export const getProdutoAquitetura = async () => {
//     return new Promise(resolve => setTimeout(() => {
//         resolve(api)
//     }, 2000))
// }

// export const getProdutoArte = async () => {
//     return new Promise(resolve => setTimeout(() => {
//         resolve(produtoArte)
//     }, 2000))
// }

// export const getProdutoLivro = async () => {
//     return new Promise(resolve => setTimeout(() => {
//         resolve(produtoLivro)
//     }, 2000))
// }

// export const getProdutosSimples = async () => {
//     return new Promise(resolve => setTimeout(() => {
//         resolve(produtosSimples)
//     }, 2000))
// }
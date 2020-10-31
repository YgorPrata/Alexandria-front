import axios from 'axios'
import { baseUrl } from '../api/api'

export const getArquitetura = (id) => { 
  return axios.get(baseUrl + 'app/produto/arquitetura?id=' + id)
    .then((response) => {
        return response.data[0]
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
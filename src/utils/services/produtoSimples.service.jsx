import axios from 'axios'
import { baseUrl } from '../api/api'

export const getProdutoSimples = (value, tipo, categoria, limite) => {

  if(categoria == 'categoria' || categoria == 'tudo'){
    if(tipo == 'tipo' || tipo == 'tudo'){
      console.log('buscar todos os tipos em -> em todas as categorias')
    }
    else{
      console.log(tipo +  ' -> em todas as categorias')
      // return axios.get(baseUrl + 'app/produto/arquitetura/buscanofiltro' 
      //   + '&' + tipo + '=' + value
      //   + '&limite=' + limite)
      //   .then((response) => {
      //       return response.data
      //   })
      //   .catch((error) => {
      //       console.log('Error', error)
      //   })
    }
  }
  else{
    if(tipo == 'tipo' || tipo == 'tudo'){
      console.log('buscar todos os tipos em -> ' + categoria)

      return axios.get(baseUrl + 'app/produto/' + categoria + '/buscanofiltro?' 
        + '&query=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
    else{
      return axios.get(baseUrl + 'app/produto/' + categoria + '/buscanofiltro?' 
        + '&' + tipo + '=' + value
        + '&limite=' + limite)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
  }
}

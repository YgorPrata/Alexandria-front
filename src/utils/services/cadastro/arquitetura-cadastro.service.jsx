import axios from 'axios'
import { baseUrl } from '../../api/api'

export const SaveArquitetura = (objToSave) => { 
  return axios.post(baseUrl + 'app/user/arquitetura/cadastro', objToSave, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
    .then((response) => {
        return response
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
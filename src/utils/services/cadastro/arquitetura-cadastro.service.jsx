import axios from 'axios'
import { baseUrl } from '../../api/api'

export const SaveArquitetura = (formData) => { 

  return axios.post(baseUrl + 'app/user/arquitetura/cadastro', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + localStorage.getItem('authorization'),
      'UserId': localStorage.getItem('userid'),
    }
  })
    .then((response) => {
        return response.status
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
import axios from 'axios'
import { baseUrl } from '../api/api'

export const login = (login) => { 
  return axios.get(baseUrl + 'app/login/autentica/', login)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
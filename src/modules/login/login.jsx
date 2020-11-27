import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { WhapperLogin, CardLogin, Info, WhapperBtn } from './login.styled'
import { login } from '../../utils/services/login.service'

class Login extends Component {

  state = {
    login: String,
    password: String,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  login(){
    const dados = { 
      user: this.state.login, 
      password: this.state.password,
    }

    login(dados).then((response) => {
      // this.setState({ totalProdutosService: response })
      console.log('log', response )
    })
  }

  render() {
    const { login, password } = this.state

    return (
      <WhapperLogin>
        <CardLogin>
          <Form>
            <Form.Group 
              controlId="login" 
              value={login}
              onChange={e => this.setState({ login: e.target.value })}>
              <Form.Label>login</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group 
              controlId="password" 
              value={password}
              onChange={e => this.setState({ password: e.target.value })}>
              <Form.Label>senha</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form>

          <Info>
            ainda não está cadastrado? 
            <Link to="/cadastro/login"><span> cadastre-se</span></Link>
          </Info>

          <WhapperBtn>
            <Button type="button" variant="primary" className="btn-login" onClick={() => this.login()}>
              acessar
            </Button>
          </WhapperBtn>
        
        </CardLogin>
      </WhapperLogin>
    )
  }
}

export default Login

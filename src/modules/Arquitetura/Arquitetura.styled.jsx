import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 25px;
`
export const BoxImg = styled.div`
  background: red;
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 5px;
`

export const Titulo = styled.h2`
  margin: 0 0 20px 0;
  color: #33403f;

  @media (max-width: 550px){
    font-size: 28px;
    margin-top: 40px;
  }
`

export const WrapperHeader = styled.span`
  display: flex;
  font-weight: 700;
  margin-top: 7px;
  span {
    color: #41716f;
  }
`
export const BoxHeader = styled.div`
  margin-left: 14px;
  font-weight: 200;
`
export const Descricao = styled.div`
  margin: 35px 0 15px 0;
`

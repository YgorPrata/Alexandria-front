import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 25px;
`
export const BoxImg = styled.div`
  background: red;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  justify-content: center;
  display: flex;

  img {
    width: 250px;
  }
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
    color: #37e29b;
  }
`
export const BoxHeader = styled.div`
  margin-left: 14px;
  font-weight: 200;
`
export const Descricao = styled.div`
  margin: 35px 0 15px 0;
`
export const BannerEnd = styled.div`
  background: #37e29b;
  margin-top: 90px;
  padding: 100px 0;
  color: #fff;
  text-align: center;

  button{
    margin-top: 45px;
    font-size: 23px;
    padding: 6px 50px;
    box-shadow: 0px 15px 51px rgb(90 90 90 / 25%);
    font-weight: 600;

    &:hover{
      box-shadow: 0px 15px 51px rgb(90 90 90 / 25%);
      padding: 6px 57px;
    }
  }
`
export const BannerEndTitle = styled.div`
  font-size: 32px;
`
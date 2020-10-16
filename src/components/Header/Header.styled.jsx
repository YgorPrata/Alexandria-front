import styled from 'styled-components'


export const WrapperHeader = styled.div`
  .navbar{
    @media (max-width: 767px){
      padding: 12px 0px 12px 16px;
    }

    &-brand{
      a { 
        font-size: 22px;
        margin-right: 25px;
        margin-left: 14px;
      }
    }
  
    &-nav{
      .nav-link{
        border-bottom: 0px;
        transition-property: border-bottom;
        transition-duration: 0.4s;
        trasition: ease-in;
      }

      .nav-link:hover{
        border-bottom: 3px solid #518e8b;
        padding-bottom: 4px;
        margin-bottom: -11px;
      }
    }
  }
`
export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  margin: 0px -14px;
  
  @media (max-width: 767px){
    grid-template-columns: 1fr auto;
  }
`
import styled from 'styled-components'

export const Border = styled.div`
    width: 60px;
    height: 5px;
    background:  #283036;
    margin-top: -5px;
    `

export const WrapperFooter = styled.div`
    width: 100%;
    background: #4c8885;
    margin-top: 50px;
    `

export const TopFooter = styled.div`
    padding: 5px;
    height: 150px;
    width: 100%;
    background: #518e8b;
`
export const EndFooter = styled.div`
    min-height: 31px;
    padding-top: 14px;
    padding-bottom: 14px;
    color: #d6d6d6;

    a {
        color: #fff;
        transition: ease 1s;

        &:hover{
            // &:before{
            //     content: " { ";
            //     color:  #d6d6d6;
            // }
            // &:after{
            //     content: " } ";
            //     color:  #d6d6d6;
            // }
        }
    }
`
import React, { Component } from 'react'
import { Bgred } from './Footer.styled'

export default class Footer extends Component{
    render(){     
        return(
            <div class="container">
                <footer>
                    <span>Copyright © 2020 Alexandria. Orgulhosamente Desenvolvido por </span>
                    <a href="#">Dennys Coelho</a>
                    <span>, </span>
                    <a href="#">Felipe Savacinni</a>
                    <span> e </span>
                    <a href="https://br.linkedin.com/in/ygor-prata-a3ab70105?challengeId=AQEt8cgETIw5rgAAAXS-M9pqsSpVBB1xaYKYbzwMpSNtnlBXVHARWSmyWhIRLmueYvbZ6NPuzcBTrREwj1XyWwqiC39TVqqtaA&submissionId=1e5f53ab-429b-3716-ccf5-9cc37b838e72">Ygor Prata</a> 
                </footer>
            </div>
        )
    }
}
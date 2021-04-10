import React from 'react'

import linkedin from '../../resource/logo/linkedin.png'
import github from '../../resource/logo/github.png'
import email from '../../resource/logo/email.png'
import javacript from '../../resource/logo/javascript.png'
import java from '../../resource/logo/java.png'

import './style.css'

export default function MainContent(){
    return(
        <>
            <div class="content">
                <div class="about">
                    <p>
                        Um graduando de ciência da computação, solucionador de problemas e pensador 
                        crítico. Qualquer que seja a função que tenha exercido, sempre busquei trazer 
                        um ponto de vista lógico, focado em entender o problema e desenvolver a melhor 
                        estratégia de solução para o mesmo.
                    </p>
                </div>
                <div class="find-skills">
                    <div>
                        <h3>Encontre-me</h3>
                        <div class="item">
                            <a href="https://www.linkedin.com/in/marcos-warmling/" target="_blank">
                                <img src={linkedin} alt="logo linkedin" class="icons"/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.github.com/marcoswb" target="_blank">
                                <img src={github} alt="logo github" class="icons"/>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" target="_blank">
                                <img src={email} alt="logo email" class="icons"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <div class="item">
                            <span>JavaScript</span>
                            <img src={javacript} alt="logo javascrip"/>
                        </div>
                        <div class="item">
                            <span>Java</span>
                            <img src={java} alt="logo java"/>
                        </div>
                        <div class="item">
                            <span>Perl</span>
                            <img src={javacript} alt="logo perl"/>
                        </div>
                        <div class="item">
                            <span>SQL</span>
                            <img src={javacript} alt="logo SQL"/>
                        </div>
                        <div class="item">
                            <span>AWK</span>
                            <img src={javacript} alt="logo AWK"/>
                        </div>
                        <div class="item">
                            <span>Batch Script</span>
                            <img src={javacript} alt="logo Batch Script"/>
                        </div>
                        <div class="item">
                            <span>React</span>
                            <img src={javacript} alt="logo React"/>
                        </div>
                        <div class="item">
                            <span>Git</span>
                            <img src={javacript} alt="logo git"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
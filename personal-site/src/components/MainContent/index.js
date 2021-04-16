import React from 'react'

import linkedin from '../../resource/logo/linkedin.png'
import github from '../../resource/logo/github.png'
import email from '../../resource/logo/email.png'
import javacript from '../../resource/logo/javascript.png'
import java from '../../resource/logo/java.png'
import perl from '../../resource/logo/perl.png'
import SQL from '../../resource/logo/SQL.png'
import AWK from '../../resource/logo/AWK.png'
import batch from '../../resource/logo/batch.png'
import react from '../../resource/logo/react.png'
import git from '../../resource/logo/git.png'

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
                        <h3>Skills</h3>
                        <div class="item-skill">
                            <div class="item">
                                <span>Java</span>
                                <img src={java} alt="logo java"/>
                            </div>
                            <div class="item">
                                <span>JavaScript</span>
                                <img src={javacript} alt="logo javascrip"/>
                            </div>
                        </div>
                        <div class="item-skill">
                            <div class="item">
                                <span>React</span>
                                <img src={react} alt="logo React"/>
                            </div>
                            <div class="item">
                                <span>SQL</span>
                                <img src={SQL} alt="logo SQL"/>
                            </div>
                        </div>
                        <div class="item-skill">
                            <div class="item">
                                <span>Git</span>
                                <img src={git} alt="logo git"/>
                            </div>
                            <div class="item">
                                <span>Perl</span>
                                <img src={perl} alt="logo perl"/>
                            </div>
                        </div>
                        <div class="item-skill">
                            <div class="item">
                                <span>AWK</span>
                                <img src={AWK} alt="logo AWK"/>
                            </div>
                            <div class="item">
                                <span>Batch Script</span>
                                <img src={batch} alt="logo Batch Script"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="item-findme">
                            <h3>Encontre-me</h3>
                        </div>
                        <div class="item-findme">
                            <a href="https://www.linkedin.com/in/marcos-warmling/" target="_blank">
                                <img src={linkedin} alt="logo linkedin" class="icons"/>
                            </a>
                        </div>
                        <div class="item-findme">
                            <a href="https://www.github.com/marcoswb" target="_blank">
                                <img src={github} alt="logo github" class="icons"/>
                            </a>
                        </div>
                        <div class="item-findme">
                            <a href="#" target="_blank">
                                <img src={email} alt="logo email" class="icons"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
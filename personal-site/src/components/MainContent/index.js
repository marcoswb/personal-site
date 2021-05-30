import React from 'react'

import linkedin from '../../resource/images/linkedin.png'
import github from '../../resource/images/github.png'
import email from '../../resource/images/email.png'
import javacript from '../../resource/images/javascript.png'
import linux from '../../resource/images/linux.png'
import SQL from '../../resource/images/SQL.png'
import python from '../../resource/images/python.png'
import react from '../../resource/images/react.png'
import git from '../../resource/images/git.png'

import './style.css'

export default function MainContent(){

    function openEmail(){
        window.open(`mailto:${process.env.REACT_APP_EMAIL}?subject=Contato%20via%20site`)
    }

    return(
        <>
            <div className="content">
                <div className="about">
                    <p>{process.env.REACT_APP_ABOUT}</p>
                </div>
                <div className="find-skills">
                    <div className="container-itens">
                        <div className="header-skill">
                            <h3>Skills</h3>
                        </div>
                        <div className="container-skill">
                            <div className="item-skill">
                            <div className="item">
                                    <span>Python</span>
                                    <img src={python} alt="logo Python"/>
                                </div>
                                <div className="item">
                                    <span>JavaScript</span>
                                    <img src={javacript} alt="logo javascript"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>Git</span>
                                    <img src={git} alt="logo git"/>
                                </div>
                                <div className="item">
                                    <span>SQL</span>
                                    <img src={SQL} alt="logo SQL"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>React</span>
                                    <img src={react} alt="logo React"/>
                                </div>
                                <div className="item">
                                    <span>Linux</span>
                                    <img src={linux} alt="logo java"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-itens">
                        <div className="header-findme">
                            <h3>Encontre-me</h3>
                        </div>
                        <div className="container-findme">
                            <div className="item-findme">
                                <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank">
                                    <img src={linkedin} alt="logo linkedin" className="icons"/>
                                </a>
                            </div>
                            <div className="item-findme">
                                <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank">
                                    <img src={github} alt="logo github" className="icons"/>
                                </a>
                            </div>
                            <div className="item-findme">
                                <a onClick={openEmail}>
                                    <img src={email} alt="logo email" className="icons"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'

import linkedin from '../../resource/logo/linkedin.png'
import github from '../../resource/logo/github.png'
import email from '../../resource/logo/email.png'
import javacript from '../../resource/logo/javascript.png'
import java from '../../resource/logo/java.png'
import perl from '../../resource/logo/perl.png'
import SQL from '../../resource/logo/SQL.png'
import AWK from '../../resource/logo/AWK.png'
import python from '../../resource/logo/python.png'
import react from '../../resource/logo/react.png'
import git from '../../resource/logo/git.png'

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
                                    <span>Java</span>
                                    <img src={java} alt="logo java"/>
                                </div>
                                <div className="item">
                                    <span>JavaScript</span>
                                    <img src={javacript} alt="logo javascript"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>Python</span>
                                    <img src={python} alt="logo Python"/>
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
                                    <span>Git</span>
                                    <img src={git} alt="logo git"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>Perl</span>
                                    <img src={perl} alt="logo perl"/>
                                </div>
                                <div className="item">
                                    <span>AWK</span>
                                    <img src={AWK} alt="logo AWK"/>
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
import React, {useEffect, useState} from 'react'

import FirebaseService from '../../services/FirebaseService'
import logo_linkedin from '../../images/linkedin.png'
import logo_github from '../../images/github.png'
import logo_email from '../../images/email.png'
import logo_javacript from '../../images/javascript.png'
import logo_linux from '../../images/linux.png'
import logo_SQL from '../../images/SQL.png'
import logo_python from '../../images/python.png'
import logo_react from '../../images/react.png'
import logo_git from '../../images/git.png'
import './style.css'


export default function MainContent(){

    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')

    useEffect(async() => {
        setEmail(await FirebaseService.getEmail())
        setAbout(await FirebaseService.getAbout())
        setLinkedin(await FirebaseService.getLinkedin())
        setGithub(await FirebaseService.getGithub())
    }, [])

    function openEmail(){
        window.open(`mailto:${email}?subject=Contato%20via%20site`)
    }

    return(
        <>
            <div className="content">
                <div className="about">
                    <p>{about}</p>
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
                                    <img src={logo_python} alt="logo Python"/>
                                </div>
                                <div className="item">
                                    <span>JavaScript</span>
                                    <img src={logo_javacript} alt="logo javascript"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>Git</span>
                                    <img src={logo_git} alt="logo git"/>
                                </div>
                                <div className="item">
                                    <span>SQL</span>
                                    <img src={logo_SQL} alt="logo SQL"/>
                                </div>
                            </div>
                            <div className="item-skill">
                                <div className="item">
                                    <span>React</span>
                                    <img src={logo_react} alt="logo React"/>
                                </div>
                                <div className="item">
                                    <span>Linux</span>
                                    <img src={logo_linux} alt="logo java"/>
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
                                <a href={linkedin} target="_blank">
                                    <img src={logo_linkedin} alt="logo linkedin" className="icons"/>
                                </a>
                            </div>
                            <div className="item-findme">
                                <a href={github} target="_blank">
                                    <img src={logo_github} alt="logo github" className="icons"/>
                                </a>
                            </div>
                            <div className="item-findme">
                                <a onClick={openEmail}>
                                    <img src={logo_email} alt="logo email" className="icons"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'

import Navbar from '../../components/Navbar'

import linkedin from '../../resource/images/linkedin.png'
import github from '../../resource/images/github.png'
import email from '../../resource/images/email.png'
import whatsapp from '../../resource/images/whatsapp.png'

import './style.css'

export default function Contacts(){

    function openEmail(){
        window.open(`mailto:${process.env.REACT_APP_EMAIL}?subject=Contato%20via%20site`)
    }

    function openWhatsapp(){
        window.open(`https://api.whatsapp.com/send?phone=+${process.env.REACT_APP_NUMBER_PHONE}`)
    }

    return(
        <>
            <Navbar />

            <div className="contacts">
                <h2>Contatos</h2>
                <div className="item">
                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank">
                        <img src={linkedin} alt="logo linkedin" className="icon"/>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="item">
                    <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank">
                        <img src={github} alt="logo github" className="icon"/>
                        <span>Github</span>
                    </a>
                </div>
                <div className="item" onClick={openEmail}>
                    <img src={email} alt="logo email" className="icon"/>
                    <span>E-mail</span>
                </div>
                <div className="item" onClick={openWhatsapp}>
                    <img src={whatsapp} alt="logo whatsapp" className="icon"/>
                    <span>Whatsapp</span>
                </div>
            </div>
        </>
    )
}
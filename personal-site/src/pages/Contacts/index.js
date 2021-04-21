import React from 'react'

import Navbar from '../../components/Navbar'

import linkedin from '../../resource/logo/linkedin.png'
import github from '../../resource/logo/github.png'
import email from '../../resource/logo/email.png'
import whatsapp from '../../resource/logo/whatsapp.png'

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

            <div class="contacts">
                <h2>Contatos</h2>
                <div class="item">
                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank">
                        <img src={linkedin} alt="logo linkedin" class="icon"/>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div class="item">
                    <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank">
                        <img src={github} alt="logo github" class="icon"/>
                        <span>Github</span>
                    </a>
                </div>
                <div class="item" onClick={openEmail}>
                    <img src={email} alt="logo email" class="icon"/>
                    <span>E-mail</span>
                </div>
                <div class="item" onClick={openWhatsapp}>
                    <img src={whatsapp} alt="logo whatsapp" class="icon"/>
                    <span>Whatsapp</span>
                </div>
            </div>
        </>
    )
}
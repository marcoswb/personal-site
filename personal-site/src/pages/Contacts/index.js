import React from 'react'

import Navbar from '../../components/Navbar'
import NumberModal from '../../components/NumberModal'
import EmailModal from '../../components/EmailModal'

import linkedin from '../../resource/logo/linkedin.png'
import github from '../../resource/logo/github.png'
import email from '../../resource/logo/email.png'
import whatsapp from '../../resource/logo/whatsapp.png'

import './style.css'

export default function Contacts(){

    return(
        <>
            <Navbar />

            <div class="contacts">
                <h2>Contatos</h2>
                <div class="item">
                    <a href="https://www.linkedin.com/in/marcos-warmling/" target="_blank">
                        <img src={linkedin} alt="logo linkedin" class="icon"/>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div class="item">
                    <a href="https://www.github.com/marcoswb" target="_blank">
                        <img src={github} alt="logo github" class="icon"/>
                        <span>Github</span>
                    </a>
                </div>
                <div class="item">
                        <img src={email} alt="logo email" class="icon"/>
                        <EmailModal />
                </div>
                <div class="item">
                    <img src={whatsapp} alt="logo celular" class="icon"/>
                    <NumberModal />
                </div>
            </div>
        </>
    )
}
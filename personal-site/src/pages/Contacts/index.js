import React, {useEffect, useState} from 'react'

import Navbar from '../../components/Navbar'
import FirebaseService from '../../services/FirebaseService'
import logo_linkedin from '../../images/linkedin.png'
import logo_github from '../../images/github.png'
import logo_email from '../../images/email.png'
import logo_whatsapp from '../../images/whatsapp.png'
import './style.css'


export default function Contacts(){

    const [email, setEmail] = useState('')
    const [number_phone, setNumberPhone] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')

    useEffect(async() => {
        setEmail(await FirebaseService.getEmail())
        setNumberPhone(await FirebaseService.getNumberPhone())
        setLinkedin(await FirebaseService.getLinkedin())
        setGithub(await FirebaseService.getGithub())
    }, [])

    function openEmail(){
        window.open(`mailto:${email}?subject=Contato%20via%20site`)
    }

    function openWhatsapp(){
        window.open(`https://wa.me/${number_phone}`)
    }

    return(
        <>
            <Navbar />

            <div className="contacts">
                <h2>Contatos</h2>
                <div className="item">
                    <a href={linkedin} target="_blank">
                        <img src={logo_linkedin} alt="logo linkedin" className="icon"/>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="item">
                    <a href={github} target="_blank">
                        <img src={logo_github} alt="logo github" className="icon"/>
                        <span>Github</span>
                    </a>
                </div>
                <div className="item" onClick={openEmail}>
                    <img src={logo_email} alt="logo email" className="icon"/>
                    <span>E-mail</span>
                </div>
                <div className="item" onClick={openWhatsapp}>
                    <img src={logo_whatsapp} alt="logo whatsapp" className="icon"/>
                    <span>Whatsapp</span>
                </div>
            </div>
        </>
    )
}
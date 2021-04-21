import React from 'react'

import './style.css'
import perfilImage from '../../resource/perfil.png'

export default function Carrossel(){

    function openWhatsapp(){
        window.open(`https://api.whatsapp.com/send?phone=+${process.env.REACT_APP_NUMBER_PHONE}`)
    }

    return(
        <>
            <div className="carrossel">
                <div className="carrossel-item">
                    <h1 id="main-title">Olá, eu sou {process.env.REACT_APP_NAME}</h1>
                    <h2 id="subtitle">{process.env.REACT_APP_OCCUPATION}</h2>
                    <button id="conversation" onClick={openWhatsapp}>Vamos conversar</button>
                </div>
                <div className="carrossel-item">
                    <img src={perfilImage} alt="imagem de perfil" />
                </div>
            </div>
        </>
    )
}

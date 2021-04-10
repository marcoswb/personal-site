import React from 'react'

import './style.css'
import perfilImage from '../../resource/perfil.png'

export default function Carrossel(){
    return(
        <>
            <div class="carrossel">
                <div class="carrossel-item">
                    <h1 id="main-title">Olá, eu sou Marcos</h1>
                    <h2 id="subtitle">Desenvolvedor ETL</h2>
                    <button id="conversation">Vamos Conversar</button>
                </div>
                <div  class="carrossel-item">
                    <img src={perfilImage} alt="imagem de perfil Marcos" />
                </div>
            </div>
        </>
    )
}

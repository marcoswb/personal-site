import React from 'react'

import './style.css'
import perfilImage from '../../resource/perfil.png'

export default function Carrossel(){
    return(
        <>
            <div class="container">
                <div class="item">
                    <p class="main-title">Olá, eu sou Marcos</p>
                    <p class="subtitle">DevOps Engineer</p>
                    <button>Vamos Conversar</button>
                </div>
                <div  class="item">
                    <img src={perfilImage}/>
                </div>
            </div>
        </>
    )
}

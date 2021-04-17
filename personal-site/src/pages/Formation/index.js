import React from 'react'
import Navbar from '../../components/Navbar'

import './style.css'

export default function Formation(){

    return(
        <>
            <Navbar />
            <div class="formation">
                <h2>Formação</h2>
                <div class="item-formation">
                   <h4>CEDUP - Centro de Educação Profissional Abílio Paulo</h4>
                   <p>Curso Técnico Profissionalizante em programação</p>
                   <span class="duration">Concluído: Fevereiro - 2017 à Dezembro - 2019</span>
                </div>
                <div class="item-formation">
                   <h4>UNESC - Universidade do Extremo Sul Catarinense</h4>
                   <p>Graduação em Ciência da Computação</p>
                   <span class="duration">Cursando: Janeiro - 2020 à Junho - 2024(finalização prevista)</span>
                </div>
            </div>
        </>
    )
}
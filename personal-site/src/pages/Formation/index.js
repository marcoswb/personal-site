import React from 'react'
import Navbar from '../../components/Navbar'

import './style.css'

export default function Formation(){

    return(
        <>
            <Navbar />
            <div className="formation">
                <h2>Formação</h2>
                <div className="item-formation">
                   <h4>CEDUP - Centro de Educação Profissional Abílio Paulo</h4>
                   <p>Curso Técnico Profissionalizante em programação</p>
                   <span className="duration">Concluído: Fevereiro - 2017 à Dezembro - 2019</span>
                </div>
                <div className="item-formation">
                   <h4>UNESC - Universidade do Extremo Sul Catarinense</h4>
                   <p>Graduação em Ciência da Computação</p>
                   <span className="duration">Cursando: Janeiro - 2020 à Junho - 2024(finalização prevista)</span>
                </div>
            </div>
        </>
    )
}
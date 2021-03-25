import React from 'react'
import Navbar from '../../components/Navbar'
import Carrossel from '../../components/Carrossel'

import './style.css'

export default function Home(){

    return (
        <>
            <Navbar />
            <Carrossel />
            <div class="content">
                <p>
                    Um graduando de ciência da computação, solucionador de problemas e pensador crítico.
                    Atualmente trabalhando como técnico de conversão de dados.
                </p>
            </div>
        </>
    )
}
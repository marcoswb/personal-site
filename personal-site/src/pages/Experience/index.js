import React from 'react'
import Navbar from '../../components/Navbar'

import './style.css'

export default function Experience(){

    return(
        <>
            <Navbar />
            <div class="experience">
                <h2>Experiência</h2>
                <div class="item-experience">
                   <h4>Thomson Reuters Corporation</h4>
                   <p>Desenvolvedor ETL</p>
                   <span class="duration">Abril - 2020</span>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import Navbar from '../../components/Navbar'

import './style.css'

export default function Experience(){

    return(
        <>
            <Navbar />
            <div className="experience">
                <h2>Experiência</h2>
                <div className="item-experience">
                   <h4>Thomson Reuters Corporation</h4>
                   <p>Desenvolvedor ETL</p>
                   <span className="duration">Abril - 2020</span>
                </div>
            </div>
        </>
    )
}
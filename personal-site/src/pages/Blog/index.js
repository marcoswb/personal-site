import React from 'react'
import Navbar from '../../components/Navbar'

import './style.css'

export default function Blog(){

    return(
        <>
            <Navbar />
            <div className="blog">
                <div className="header-posts">
                    <h2>Blog</h2>
                    <div>
                        <input type="text" id="search-input" placeholder="Procure um tema/post" />
                        <button id="search-button">Pesquisar</button>
                    </div>
                </div>
                <h1>Nenhum post criado até o momento</h1>
                {/* <div className="post-item">
                   <h4>EXEMPLO DE POST</h4>
                   <p>Descrição</p>
                   <p className="date">22 de março de 2021</p>
                </div> */}
            </div>
        </>
    )
}
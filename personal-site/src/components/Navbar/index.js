import React from 'react'

import './style.css'

export default function Navbar(){

    return (
        <>
            <nav class="container">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Experiência</a>
                    </li>
                    <li>
                        <a href="#">Formação</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
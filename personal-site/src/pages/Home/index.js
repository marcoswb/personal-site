import React from 'react'

import './style.css'

export default function Home(){

    return (
        <>
            <div class="main">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-sm navbar-custom">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a class="navbar-brand" href="#">Marcos Warmling Berti</a>
                            <div class="mx-auto order-0">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Experiência</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Formação</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sobre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contatos</a>
                                </li>
                                </ul>
                            </div>
                            <form class="form-inline my-2 my-lg-0">
                            <button type="button" class="btn btn-outline-light">Vamos Conversar</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
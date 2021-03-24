import React from 'react'
import $ from 'jquery'

import './style.css'

export default function Navbar(){

    $(window).on('load resize',function(){
        var w = $(window).width();
        var h = $(window).height();
        var x = 700;
        if (w >= x) {
            $('nav ul').css({ display: 'flex',height: 'auto' });
        }else {
            $('nav ul').css({ display: 'none',height: h + 'px'});
        }
    });

    function handleClickToggleMenu(){
        $(this).toggleClass('active');
        $('.navbar').slideToggle();
    }

    return (
        <>
            <nav class="container">
                <h1 class="logo">Marcos Warmling Berti</h1>
                <ul class="navbar">
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
                <div class="nav__icon" onClick={handleClickToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}
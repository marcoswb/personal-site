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
        $('#navbar').slideToggle();
    }

    return (
        <>
            <nav>
                <h1>Marcos Warmling Berti</h1>
                <ul id="navbar">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/experience">Experiência</a>
                    </li>
                    <li>
                        <a href="/formation">Formação</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contacts">Contatos</a>
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
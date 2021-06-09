import React, {useState, useEffect} from 'react'
import $ from 'jquery'

import FirebaseService from '../../services/FirebaseService'
import './style.css'


export default function Navbar(){

    const [full_name, setFullName] = useState('')

    useEffect(async() => {
        setFullName(await FirebaseService.getFullName())
    }, [])

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
                <h1>
                    <a href="/">{full_name}</a>
                </h1>
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
                        <a href="/projects">Projetos</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contacts">Contatos</a>
                    </li>
                </ul>
                <div className="nav__icon" onClick={handleClickToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}
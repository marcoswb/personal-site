import React, {useState, useEffect} from 'react'

import FirebaseService from '../../services/FirebaseService'
import perfilImage from '../../images/perfil.png'
import './style.css'

export default function Carrossel(){

    const [number_phone, setNumberPhone] = useState('')
    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')

    useEffect(async() => {
        setNumberPhone(await FirebaseService.getNumberPhone())
        setName(await FirebaseService.getName())
        setOccupation(await FirebaseService.getOccupation())
    }, [])

    function openWhatsapp(){
        window.open(`https://wa.me/${number_phone}`)
    }

    return(
        <>
            <div className="carrossel">
                <div className="carrossel-item">
                    <h1 id="main-title">Olá, eu sou {name}</h1>
                    <h2 id="subtitle">{occupation}</h2>
                    <button id="conversation" onClick={openWhatsapp}>Vamos conversar</button>
                </div>
                <div className="carrossel-item">
                    <img src={perfilImage} alt="imagem de perfil" />
                </div>
            </div>
        </>
    )
}

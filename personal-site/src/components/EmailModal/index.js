import React from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './style.css'

export default function Contacts({message}){

    function enviarEmail(){
        alert("Email enviado");
    }

    return(
        <Popup trigger={<span>{message}</span>} modal nested>
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header font-style">Envie um e-mail para mim...</div>
                <div className="content font-style">
                    <p>
                        De:.....
                    </p>
                    <p>
                        Para:.....
                    </p>
                    <p>
                        Assunto:.....
                    </p>
                    <p>
                        Mensagem:.....
                    </p>
                </div>
                <div className="actions">
                <button className="button font-style-button" 
                    onClick={() => {
                        enviarEmail()
                    }}
                >
                    Enviar
                </button>
                <button className="button font-style-button" 
                    onClick={() => {
                        close();
                    }}
                >
                    Close
                </button>
                </div>
            </div>
            )}
        </Popup>
    )
}
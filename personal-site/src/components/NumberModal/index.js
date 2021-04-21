import React from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './style.css'

export default function Contacts(){

    return(
        <Popup trigger={<span>Celular</span>} modal nested>
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header font-style">Entre em contato</div>
                <div className="content font-style">
                    <p>
                        (48)99600-3423
                    </p>
                </div>
                <div className="actions">
                <button id="close" className="button font-style-button" 
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
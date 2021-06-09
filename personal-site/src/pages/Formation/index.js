import React, {useEffect, useState} from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Formation(){

    const [formations, setFormations] = useState([])

    useEffect(async() => {
        setFormations(await FirebaseService.getFormations())
    }, [])

    return(
        <>
            <Navbar />
            <div className="formation">
                <h2>Formação</h2>
                {formations.map(formation => (
                    <div key={formation["id"]} className="item-formation">
                        <h4 key={formation["id"]}>{formation["institution"]}</h4>
                        <p key={formation["id"]}>{formation["curse"]}</p>
                        <span key={formation["id"]} className="duration">{formation["duration"]}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
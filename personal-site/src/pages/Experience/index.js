import React, {useEffect, useState} from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Experience(){

    const [experiences, setExperiences] = useState([])

    useEffect(async() => {
        setExperiences(await FirebaseService.getExperiences())
    }, [])

    return(
        <>
            <Navbar />
            <div className="experience">
                <h2>Experiência</h2>
                {experiences.map(experience => (
                    <div key={experience["id"]} className="item-experience">
                        <h4 key={experience["id"]}>{experience["company"]}</h4>
                        <p key={experience["id"]}>{experience["work"]}</p>
                        <span key={experience["id"]} className="duration">{experience["duration"]}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
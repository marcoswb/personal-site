import React, { useState, useEffect } from 'react'

import Navbar from '../../components/Navbar'
import data from '../../resource/projects.json'

import './style.css'

export default function Projects(){
    
    const [valueFind, setValueFind] = useState('')
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        setProjects(data)
    }, [])

    function handleClick(){
        setProjects(data)

        findProjects(data)
    }

    function findProjects(projects){
        const projectsFilter = projects.filter(item => {
            const valueLowerCase = item.techs.toLowerCase()
            const valueFindLowerCase = valueFind.toLowerCase()
            if(valueLowerCase.includes(valueFindLowerCase)){
                return item
            }
        })
        setProjects(projectsFilter)
    }

    return(
        <>
            <Navbar />
            <div className="project">
                <div className="header-project">
                    <h2>Projetos</h2>
                    <div>
                        <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Procure por uma linguagem"
                            value={valueFind}
                            onChange={event => setValueFind(event.target.value)}
                            onKeyUp={handleClick}
                        />
                        <button id="search-button" onClick={handleClick}>Pesquisar</button>
                    </div>
                </div>
                {projects.map(item => (
                    <a href={item.link} target="_blank">
                        <div className="project-item">
                                <h4>{item.title}</h4>
                                <p className="description">{item.description}</p>
                                <p className="techs">{item.techs}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}
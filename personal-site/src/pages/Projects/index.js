import React, { useState, useEffect } from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Projects(){
    
    const [techFind, setTechFind] = useState('')
    const [projects, setProjects] = useState([])
    
    useEffect(async() => {
        setProjects(await FirebaseService.getProjects())
    }, [])

    async function handleClick(){
        setProjects(await FirebaseService.getProjects())

        findProjects(await FirebaseService.getProjects())
    }

    function findProjects(projects){
        const projectsFilter = projects.filter(project => {
            if(project["techs"].toLowerCase().includes(techFind.toLowerCase())){
                return project
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
                            value={techFind}
                            onChange={event => setTechFind(event.target.value)}
                            onKeyUp={handleClick}
                        />
                        <button id="search-button" onClick={handleClick}>Pesquisar</button>
                    </div>
                </div>
                {projects.map(projeto => (
                    <a href={projeto["link"]} target="_blank">
                        <div className="project-item">
                                <h4>{projeto["title"]}</h4>
                                <p className="description">{projeto["description"]}</p>
                                <p className="techs">{projeto["techs"]}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}
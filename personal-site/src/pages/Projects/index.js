import React, { useState, useEffect } from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Projects(){
    
    const [techFind, setTechFind] = useState('')
    const [projects, setProjects] = useState([])
    const [projects_techs, setProjectsTechs] = useState([])
    
    useEffect(async() => {
        setProjects(await FirebaseService.getProjects())
        setProjectsTechs(await FirebaseService.getSubmenu("projects"))
    }, [])

    async function handleClick(){
        const tag = techFind.toLowerCase()
        setProjects(await FirebaseService.getProjects())

        findProjects(await FirebaseService.getProjects(), tag)
    }

    async function handleClickSubmenu(self){
        const tag = self.target.textContent.toLowerCase()
        
        setProjects(await FirebaseService.getProjects())

        findProjects(await FirebaseService.getProjects(), tag)
    }

    function findProjects(projects, tag){
        const projectsFilter = projects.filter(project => {
            if(project["techs"].toLowerCase().includes(tag)){
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
                <div id="submenu-container">
                    <div id="submenu-item-left">
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
                    <div id="submenu-item-right">
                        <h3 onClick={handleClick}>Techs</h3>
                        <ol>
                            {projects_techs.map(project_tech => (
                                <li onClick={handleClickSubmenu}>{project_tech}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Blog(){

    const [themeFind, setThemeFind] = useState('')
    const [posts, setPosts] = useState([])
    const [blog_techs, setBlogTechs] = useState([])
    
    useEffect(async() => {
        setPosts(await FirebaseService.getPosts())
        setBlogTechs(await FirebaseService.getSubmenu("blog"))
    }, [])

    async function handleClick(){
        const tag = themeFind.toLowerCase()
        setPosts(await FirebaseService.getPosts())

        findPosts(await FirebaseService.getPosts(), tag)
    }

    async function handleClickSubmenu(self){
        const tag = self.target.textContent.toLowerCase()
        
        setPosts(await FirebaseService.getPosts())

        findPosts(await FirebaseService.getPosts(), tag)
    }

    function findPosts(posts, tag){
        const postsFilter = posts.filter(post => {
            if(post["tags"].toLowerCase().includes(tag)){
                return post
            }
        })

        setPosts(postsFilter)
    }

    return(
        <>
            <Navbar />
            <div className="blog">
                <div className="header-posts">
                    <h2>Blog</h2>
                    <div>
                        <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Procure um tema/post"
                            value={themeFind}
                            onChange={event => setThemeFind(event.target.value)}
                            onKeyUp={handleClick}
                        />
                        <button id="search-button">Pesquisar</button>
                    </div>
                </div>
                <div id="submenu-container">
                    <div id="submenu-item-left">
                        {posts.map(post => (
                            <a href={post["link"]} target="_blank">
                                <div className="project-item">
                                        <h4>{post["title"]}</h4>
                                        <p className="description">{post["description"]}</p>
                                        <p className="techs">{post["techs"]}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div id="submenu-item-right">
                        <h3 onClick={handleClick}>Assuntos</h3>
                        <ol>
                            {blog_techs.map(project_tech => (
                                <li onClick={handleClickSubmenu}>{project_tech}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'

import FirebaseService from '../../services/FirebaseService'
import Navbar from '../../components/Navbar'
import './style.css'


export default function Blog(){

    const [themeFind, setThemeFind] = useState('')
    const [posts, setPosts] = useState([])
    
    useEffect(async() => {
        setPosts(await FirebaseService.getPosts())
    }, [])

    async function handleClick(){
        setPosts(await FirebaseService.getPosts())

        findPosts(await FirebaseService.getPosts())
    }

    function findPosts(posts){
        const postsFilter = posts.filter(post => {
            if(post["tags"].toLowerCase().includes(themeFind.toLowerCase())){
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
        </>
    )
}
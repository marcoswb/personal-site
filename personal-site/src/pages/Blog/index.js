import React, { useState, useEffect } from 'react'

import Navbar from '../../components/Navbar'
import data from '../../resource/blog-posts.json'

import './style.css'

export default function Blog(){

    const [valueFind, setValueFind] = useState('')
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        setPosts(data)
    }, [])

    function handleClick(){
        setPosts(data)

        findPosts(data)
    }

    function findPosts(posts){
        const postsFilter = posts.filter(item => {
            const valueLowerCase = item.tags.toLowerCase()
            const valueFindLowerCase = valueFind.toLowerCase()
            if(valueLowerCase.includes(valueFindLowerCase)){
                return item
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
                            value={valueFind}
                            onChange={event => setValueFind(event.target.value)}
                            onKeyUp={handleClick}
                        />
                        <button id="search-button">Pesquisar</button>
                    </div>
                </div>
                {posts.map(item => (
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
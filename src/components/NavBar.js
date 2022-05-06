import React from 'react'
import Link from 'react-dom'
import '../App.css'
import { Button } from 'react-bootstrap';


class NavBar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-dark bg-dark">
                <a class = "navbar-brand" href='/'>Home</a>
                <a class = "navbar-brand" href='/about'>About</a>
                <a class = "navbar-brand" href='/project'>Projects</a>
                <a class = "navbar-brand" href='/blogs'>Blogs</a>
                <a class = "navbar-brand" href='/contact'>Contact</a>
                <input type="text" placeholder='search' onChange></input>
                <Button>Search</Button>
            </nav>
        )
    }
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-cont">
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/create"}>CreateBlog</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
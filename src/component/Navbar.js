import React, { useState } from 'react';
import '../component/Navbar.css';

export default function Navbar(){

    const [view ,setview] = useState(false);

    return(
        <div className="main">
            <div className="navbar">
                <div className="logo"><div className="logo-inside">Jayan.com</div></div>
                <ul onClick={()=>{setview(false)}} className={ view ? "phone-view" : "web-view"}>
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">blogs</a></li>
                    <li><a href="">video</a></li>
                </ul>
                <button onClick={()=>{setview(!view)}} className="view-button">
                    {view ? <i className="fas fa-times"></i> : <i className ="fas fa-bars"></i>}
                </button>
            </div>
        </div>
    )
}
import { useState } from 'react'
import './App.css'
function Unsplash(props){
    const regular = props.urls.regular;
    const alt_description = props.alt_description;
    return(
        <div className="imgcontainer">
            <img src={regular}></img>
            <h3>{alt_description}</h3>
        </div>
    )
    
}

export default Unsplash
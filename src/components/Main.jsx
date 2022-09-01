import React from "react";
import videoBg from '../assets/videoBg.mp4'
import CardClima from './CardClima'
import CardHorario from './CardHorario'

const Main = () => {
    
    return (
        <div className="main">
            <video src={videoBg} autoPlay loop muted />
            <div className="container">
                <CardClima />
                <CardHorario />
            </div>
        </div >
    )
}

export default Main
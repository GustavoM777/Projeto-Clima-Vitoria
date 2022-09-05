import React from "react";
import videoBg from '../assets/videoBg.mp4'
import Card from './Card'

const Main = () => {

    return (
        <div className="main">
            <video src={videoBg} autoPlay loop muted />
            <div className="container">
                <Card />
            </div>
        </div >
    )
}

export default Main
import React from 'react'
import styles from './ClimaTempo.css'

function ClimaTempo() {

    return (
        <div className="Content">
            <h2>🌡<span id="temp"></span>° C</h2>
            <h2 id="clima">Clima</h2>
            <img id="iconeAnimado" src="" alt="" height="100" width="100" />
            <h2>Veloc. do Vento</h2>
            <h1 id="vento-velocidade"></h1>
        </div>
    )
}

export default ClimaTempo 
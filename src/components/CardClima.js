import React from 'react'
import ClimaTempo from './ClimaTempo'
import styles from './CardClima.css'

function CardClima() {

    return (
        <div className="CardTempo">
            <div className="BorderClima">
                <ClimaTempo />
            </div>
            <div className="SubContent">
                <img src="https://taupe-stardust-6b492f.netlify.app/src/imagem/bandeira_es.gif" alt="Gif Bandeira do Espírito Santo" width="71px" />
            </div>
        </div>
    )
}

export default CardClima 
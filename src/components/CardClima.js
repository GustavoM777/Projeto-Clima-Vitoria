import React from 'react'
import ClimaTempo from './ClimaTempo'
import styles from './CardClima.css'

function CardClima() {

    return (
        <div className="ClimaTempo">
            <div className="BorderClima">
                <ClimaTempo />
            </div>
            <div className="SubContent">
                <img src="https://clima-vitoria.ga/src/imagem/bandeira_es.gif" alt="Gif Bandeira do Espírito Santo" width="70px" />
            </div>
        </div>
    )
}

export default CardClima 
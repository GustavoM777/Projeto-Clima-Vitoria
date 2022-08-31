import React from 'react'
// import Horario from './Horario'
import styles from './CardHorario.css'
import audioBg from '../assets/audioBg.mp3'

function CardHorario() {

    return (
        <div className="CardHorario">
            <div className="Content">
                <h2 id="city">Cidade</h2>
                <span id="semana">Ter </span>
                <span id="data">30/08/2022</span>
                <h2 id="horario">12:00:00</h2>
                <h1 id="title">Bom dia!</h1>
            </div>
            <div className="SubContent">
            <audio src={audioBg} controls autoPlay loop />
            </div>
        </div>
    )
}

export default CardHorario
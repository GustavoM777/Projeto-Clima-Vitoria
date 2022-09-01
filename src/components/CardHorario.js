import React from 'react'
import styles from './CardHorario.css'
import audioBg from '../assets/audioBg.m4a'

function CardHorario() {

    setInterval(function () {
        const time = document.querySelector("#horario");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let horas = ''
        let minutos = ''
        let segundos = ''

        if (hours < 10) {
            horas = "0" + hours;
        } else {
            horas = hours
        }
        if (minutes < 10) {
            minutos = "0" + minutes;
        } else {
            minutos = minutes
        }
        if (seconds < 10) {
            segundos = "0" + seconds;
        } else {
            segundos = seconds
        }
        time.textContent = horas + ":" + minutos + ":" + segundos;
    })

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
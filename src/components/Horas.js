import React, { useState, useEffect } from 'react';

function Horas() {
    const [horasState, seTHorasState] = useState();

    useEffect(() => {

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
    }, []);

    return (
        <>

        </>
    )
}

export default Horas
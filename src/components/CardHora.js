import React, { useState, useEffect } from 'react'

const CardHora = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        let titulo = window.document.getElementById('title')
        let seman = window.document.getElementById('semana')
        let dat = window.document.getElementById('data')
        let data = new Date()
        let hora = data.getHours()

        if (hora >= 0 && hora < 12) {
            //BOM DIA!  
            titulo.innerText = 'Bom dia!'
        } else if (hora >= 12 && hora < 18) {
            //BOA TARDE!
            titulo.innerHTML = 'Boa tarde!'
        } else {
            //BOA NOITE!
            titulo.innerHTML = 'Boa noite!'
        }

        let diaDaSemana = data.getDay()
        let dia = data.getDate()
        let mes = data.getMonth() + 1
        let ano = data.getFullYear()

        let strDia = new String(dia)
        let strMes = new String(mes)

        if (strDia.length == 1) dia = '0' + dia
        if (strMes.length == 1) mes = '0' + mes

        switch (diaDaSemana) {
            case 0:
                diaDaSemana = 'DOM'
                break;
            case 1:
                diaDaSemana = 'SEG'
                break;
            case 2:
                diaDaSemana = 'TER'
                break;
            case 3:
                diaDaSemana = 'QUA'
                break;
            case 4:
                diaDaSemana = 'QUI'
                break;
            case 5:
                diaDaSemana = 'SEX'
                break;
            case 6:
                diaDaSemana = 'SAB'
                break;
        }

        let dataAtual = dia + '/' + mes + '/' + ano

        seman.textContent = diaDaSemana
        dat.textContent = ' ' + dataAtual

    }, []);

    return (
        <div id='CardHora'>
            <h2 id="city">{props.cidade}</h2>
            <span id="semana">{props.semana}</span>
            <span id="data">{props.data}</span>
            <h2 id="horario">{props.horario}</h2>
            <h2 id="title">{props.titulo}</h2>
        </div>
    )
}

export default CardHora
import React from 'react'
import CardClima from './CardClima'
import CardHora from './CardHora'
import audioBg from '../assets/audioBg.m4a'
import './Card.css'
import Horas from './Horas'

const Card = () => {

    return (
        <div className='cards'>
            <div className='card'>
                <div className='Content'>
                    <CardClima temp='0' clima='Clima' img={<imgClima />} veloc='Veloc. do Vento' vento='0 m/s' />
                </div>
                <div className='SubContent'>
                    <img src="https://taupe-stardust-6b492f.netlify.app/src/imagem/bandeira_es.gif" alt="Gif Bandeira do Espírito Santo" width="71px" />
                </div>
            </div>
            <div className='card'>
                <div className='Content'>
                    <CardHora cidade='Cidade' semana='SAB ' data='03/09/2022' horario={<Horas />} titulo='Bom dia!' />
                </div>
                <div className='SubContent'>
                    <audio src={audioBg} controls autoPlay loop />
                </div>
            </div>
        </div>
    )
}

export default Card
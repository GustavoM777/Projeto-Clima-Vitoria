import React, { useState, useEffect } from 'react'

const CardClima = (props) => {

    const [data, setData] = useState({})

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${-20.319}&lon=${-40.338}&units=imperial&APPID=f17f92108bc4e261b52225ab078e7125`

        let temperatura = document.querySelector('#temp')
        let vento = document.querySelector('#vento-velocidade')
        let climaTempo = document.querySelector('#climaTempo')
        let icone = document.querySelector('#icone')
        let cidade = document.querySelector('#city')

        async function fetchApi() {
            const response = await fetch(url)
            const data = await response.json()

            let tempInCelsius = await ((5 / 9) * (data.main.temp - 32)).toFixed(1)
            temperatura.innerHTML = tempInCelsius
            vento.innerHTML = `${data.wind.speed} m/s`
            cidade.innerHTML = data.name

            switch (data.weather[0].main) {
                case 'Thunderstorm':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/thunder.svg'
                    climaTempo.textContent = 'TROVOADA';
                    break;
                case 'Drizzle':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/rainy-2.svg'
                    climaTempo.textContent = 'CHUVISCO';
                    break;
                case 'Rain':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/rainy-7.svg'
                    climaTempo.textContent = 'CHUVA';
                    break;
                case 'Snow':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/snowy-6.svg'
                    climaTempo.textContent = 'NEVE';
                    break;
                case 'Clear':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/day.svg'
                    climaTempo.textContent = 'LIMPO';
                    break;
                case 'Atmosphere':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/weather.svg'
                    climaTempo.textContent = 'ATMOSFERA';
                    break;
                case 'Clouds':
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/cloudy-day-1.svg'
                    climaTempo.textContent = 'NUBLADO';
                    break;
                default:
                    icone.src = 'https://taupe-stardust-6b492f.netlify.app/animado/cloudy-day-1.svg'
                    console.log('por defecto'); climaTempo.textContent = 'NUBLADO';
            }
        }

        fetchApi()
    }, []);

    return (
        <>
            <h2>🌡<span id="temp">{data.name}</span>° C</h2>
            <h2 id="climaTempo">{props.climaTempo}</h2>
            <div className='img-container'>
                <img id="icone" src={props.img} alt='imgClima' />
            </div>
            <h2>{props.veloc}</h2>
            <h2 id="vento-velocidade">{props.vento}</h2>
        </>
    )
}

export default CardClima
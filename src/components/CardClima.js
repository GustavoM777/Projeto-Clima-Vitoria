import React from 'react'
import ClimaTempo from './ClimaTempo'
import styles from './CardClima.css'

function CardClima() {

    function getUserPosition() {
        let url = ''
        navigator.geolocation.getCurrentPosition((pos) => {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${-20.319}&lon=${-40.338}&units=imperial&APPID=f17f92108bc4e261b52225ab078e7125`
            fetchApi(url)
        })
    }

    function fetchApi(url) {

        let temp = document.querySelector('#temp')
        let vento = document.querySelector('#vento-velocidade')
        let climaTempo = document.querySelector('#clima')
        let iconeAnimado = document.querySelector('#iconeAnimado')
        let cidade = window.document.getElementById('city')

        fetch(url)
            .then((data) => {
                return data.json()

            })
            .then((data) => {
                let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
                let desc = data.weather[0].description

                climaTempo.textContent = desc.toUpperCase()
                vento.textContent = `${data.wind.speed} m/s`
                temp.innerHTML = tempInCelsius
                cidade.textContent = data.name
                //       console.log(data)
                //       console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/thunder.svg'
                        climaTempo.textContent = 'TROVOADA';
                        break;
                    case 'Drizzle':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/rainy-2.svg'
                        climaTempo.textContent = 'CHUVISCO';
                        break;
                    case 'Rain':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/rainy-7.svg'
                        climaTempo.textContent = 'CHUVA';
                        break;
                    case 'Snow':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/snowy-6.svg'
                        climaTempo.textContent = 'NEVE';
                        break;
                    case 'Clear':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/day.svg'
                        climaTempo.textContent = 'LIMPO';
                        break;
                    case 'Atmosphere':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/weather.svg'
                        climaTempo.textContent = 'ATMOSFERA';
                        break;
                    case 'Clouds':
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/cloudy-day-1.svg'
                        climaTempo.textContent = 'NUBLADO';
                        break;
                    default:
                        iconeAnimado.src = 'https://taupe-stardust-6b492f.netlify.app/animado/cloudy-day-1.svg'
                        climaTempo.textContent = 'NUBLADO';
                        console.log('por defecto');
                }

            })
            .catch((err) => {
                cidade.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
                temp.innerHTML = `-`;
            })
    }

    getUserPosition();

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
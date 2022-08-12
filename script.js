let relogio = document.querySelector('#relogioDigital')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let dataHora = new Date()

function moveRelogio() {

  let momentoAtual = new Date()

  let hora = momentoAtual.getHours()
  let minuto = momentoAtual.getMinutes()
  let segundo = momentoAtual.getSeconds()

  let strHora = new String(hora)
  let strMinuto = new String(minuto)
  let strSegundo = new String(segundo)

  if (strSegundo.length == 1) segundo = "0" + segundo
  if (strMinuto.length == 1) minuto = "0" + minuto
  if (strHora.length == 1) hora = "0" + hora

  h.textContent = hora
  m.textContent = minuto
  s.textContent = segundo

  setTimeout("moveRelogio()", 1000)
}

function carregar() {
  let titulo = window.document.getElementById('title')
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
}

carregar()

function pegaData() {

  let diaDaSemana = dataHora.getDay()
  let dia = dataHora.getDate()
  let mes = dataHora.getMonth() + 1
  let ano = dataHora.getFullYear()

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

  semana.textContent = diaDaSemana
  data.textContent = dataAtual
}

pegaData()

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

let teste = new Date()

console.log(teste.toLocaleString('pt-BR'))
console.log(teste.toLocaleString('pt-BR', options))
console.log(teste.toLocaleDateString('pt-BR'))
console.log(teste.toLocaleTimeString('pt-BR'))

function getUserPosition() {
  let url = ''
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${-20.319}&lon=${-40.338}&units=imperial&APPID=f17f92108bc4e261b52225ab078e7125`
    fetchApi(url)
    console.log(url)
  })
}

function fetchApi(url) {
  let city = document.querySelector('.city')
  let temp = document.querySelector('#temp')
  
  fetch(url)
    .then((data) => {
      return data.json()

    })
    .then((data) => {
      let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
      // let climaTempo = document.querySelector('#clima')
      // let icone = document.querySelector('#iconeAnimado')
      let vento = document.querySelector('#vento-velocidade')

      let desc = data.weather[0].description
      clima.textContent = desc.toUpperCase()
      vento.textContent = `${data.wind.speed} m/s`
      temp.innerHTML = tempInCelsius
      vitoria.textContent = data.name

      console.log(data.weather[0].main)
      switch (data.weather[0].main) {
        case 'Thunderstorm':
          iconeAnimado.src = 'animado/thunder.svg'
          clima.textContent = 'TROVOADA';
          break;
        case 'Drizzle':
          iconeAnimado.src = 'animado/rainy-2.svg'
          clima.textContent = 'CHUVISCO';
          break;
        case 'Rain':
          iconeAnimado.src = 'animado/rainy-7.svg'
          clima.textContent = 'CHUVA';
          break;
        case 'Snow':
          iconeAnimado.src = 'animado/snowy-6.svg'
          clima.textContent = 'NEVE';
          break;
        case 'Clear':
          iconeAnimado.src = 'animado/day.svg'
          clima.textContent = 'LIMPO';
          break;
        case 'Atmosphere':
          iconeAnimado.src = 'animado/weather.svg'
          clima.textContent = 'ATMOSFERA';
          break;
        case 'Clouds':
          iconeAnimado.src = 'animado/cloudy-day-1.svg'
          clima.textContent = 'NUBLADO';
          break;
        default:
          iconeAnimado.src = 'animado/cloudy-day-1.svg'
          console.log('por defecto'); clima.textContent = 'NUBLADO';
      }

    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temperature.innerHTML = `-`;
    })
}

getUserPosition();





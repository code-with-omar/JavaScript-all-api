const API = 'ebf58f344b0628b9287396dce479ade9'
document.getElementById('search').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    weatherCall(inputValue)
})
const weatherCall = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`)
        .then(res => res.json())
        .then(data => weatherData(data))
        .catch(error => {
            console.log(error)
        });
}

const weatherData = (datum) => {
    document.getElementById('city').innerText = `${datum.name}`
    document.getElementById('temperature').innerText = `${datum.main.temp}`
    document.getElementById('Weather-message').innerText = `${datum.weather[0].main}`
    document.getElementById('Weather-message-pressure').innerText = `Pressure : ${datum.main.pressure} `
    console.log(datum.main)
}


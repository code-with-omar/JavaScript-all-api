// all country load by api and called a function countries
const countriesAllData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => countries(data));
}
// display all country
const countries = (countriesAll) => {
    // step 1: found country div for all country put in this div
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerText = ''

    for (const country of countriesAll) {
      // step 2: create a div for put each country put one by one
        const div = document.createElement('div');
        div.classList.add("col");
        // step 3: create innerHtml for country flag,name,capital,are,capital 
        div.innerHTML = `
        <div class="card h-100">
            <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">Country: ${country.name.common}</h5>
                <p>Capital :  ${country.capital ? country.capital[0] : 'No Capital'}</p>
                <p>Region : ${country.continents[0]}</p>
                <p>Area : ${country.area}</p>
            </div>
         </div>
        `
        // step 4: appendChild in step one div
        countryContainer.appendChild(div);

    }
}
countriesAllData()
// filtering country by region

const regionApi = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    fetch(url)
        .then(response => response.json())
        .then(data => regionCountry(data))
}
const regionCountry = (countries) => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerText = ''
    for (const country of countries) {
     
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
            <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">Country: ${country.name.common}</h5>
                <p>Capital :  ${country.capital ? country.capital[0] : 'No Capital'}</p>
                <p>Region : ${country.continents[0]}</p>
                <p>Area : ${country.area}</p>
            </div>
         </div>
        `
        countryContainer.appendChild(div);

    }
}

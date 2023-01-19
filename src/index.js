import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';

const inputEl = document.querySelector("#search-box")
const countryBoxEl = document.querySelector(".country-info")
const DEBOUNCE_DELAY = 300;
inputEl.addEventListener("input", debounce(() => {
const name = inputEl.value

    if (inputEl.value === "") {
     countryBoxEl.innerHTML = ""
    } else {
        fetchCountries(name.trim())
        .then(data => {
            if (data === undefined) {
        countryBoxEl.innerHTML = ""
           return
       }
            else if (data.length > 10) {
        countryBoxEl.innerHTML = ""
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
        } else if (data.length > 1 && data.length<10 ) {
            createMarkupManyCountries(data)
        } else if (data.length === 1){
         createMarkupOneCountry(data)
        } })

        }
    
}, DEBOUNCE_DELAY))




function createMarkupOneCountry(countries) {
    const markup = countries
        .map(({ name, capital, flags, languages, population }) =>`
        <img src="${flags.svg}" alt="" width="30" height="30">
        <span class="title">${name.official}</span>
        <p class="capital">Capital:${capital}</p>
        <p class="languages">Languages:${Object.values(languages)}</p>
        <p class="population">Population:${population}</p>`)
        .join('')
    
        countryBoxEl.innerHTML = markup
    
}


function createMarkupManyCountries(countries) {
    const markup = countries
        .map(({ name, capital, flags, languages, population }) =>
            `<div><img src="${flags.svg}" alt="" width="30" height="30">
            <span class="title">${name.official}</span></div>`)
        .join('')
        countryBoxEl.innerHTML = markup
    
}



import Notiflix from "notiflix"


export const fetchCountries = function (name) {
    if (name === ""){return}
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(response => {
        if (!response.ok) {
            throw new Error ()
        }
        return response.json()
    }).catch(()=> Notiflix.Notify.failure("Oops, there is no country with that name"))
}
// export const fetchCountries = function (name) {
//     return fetch(`https://restcountries.com/v3.1/${name}?fields=name,capital,population,flags,languages`).then(response => {
//         console.log(response)
//         if (!response.ok) {
//             console.log("1")
//             throw new Error("Oops, there is no country with that name")
//         }
//         return response.json()
//     }).catch(error => { console.log(error) })
// }

// Notiflix.Notify.failure("Oops, there is no country with that name")

// export default function fetchCountries(name){
// return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`).then((res) => {
//   console.log(res);
//     if (res.status === 404) {
//       throw new Error('err3')
//       }
//     return res.json();
// }).catch(errr=>{console.log(errr)})
// }
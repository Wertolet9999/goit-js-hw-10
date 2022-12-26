export function createCountryList(data = []) {
  return data
    .map(({ flags, name }) => {
      return `
        <li class='country-list__item'>
        <img class='country-list__img' src='${flags.svg}' alt='${name.official}'>
        <p class='country-list__text'>${name.official}</p>
        </li>`
    }).join('');   
}
export function createCountryCard(data = []) {
  return data
    .map(({ flags, name, capital, population, languages }) => {
      return `
        <div class="country-info">
          <div class='country-info__title'>
            <img class="country-info__img" src=${flags.png} 
              alt=${name.official}>
            <p class="country-info__name">${name.official}</p>
          </div>         
          <p class="country-info__text">
            <span class='country-info__text--bold'>Capital: </span>${capital}
          </p>
          <p class="country-info__text">
            <span class='country-info__text--bold'>Population:</span> ${population}
          </p>
          <p class="country-info__text">
            <span class='country-info__text--bold'>Languages: </span>${Object.values(languages).join(', ')}
          </p>
        </div>`
    })
    .join("");
}

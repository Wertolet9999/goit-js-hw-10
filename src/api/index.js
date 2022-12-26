const BASE_URL = `https://restcountries.com/v3.1`;
export default function fetchCountry(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }  
  );
}

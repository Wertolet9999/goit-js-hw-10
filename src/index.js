import './css/styles.css';
import getEl from './refs';
import fetchCountry from './api';
import {
    createCountryCard,
    createCountryList } from './markup';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = getEl();
refs.searchInput.addEventListener('input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);
function onSearchInput(e) {
  const dataQuery = e.target.value.trim();
  fetchCountry(dataQuery)
    .then(response => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      if (!dataQuery) {
        return;
      }
      if (response.length >= 10) {
        Notiflix.Notify.success(
          'Too many matches found. Please enter a more specific name.');
      } else if (response.length === 1) {
        refs.countryInfo.innerHTML = createCountryCard(response);
      } else {
        refs.countryList.insertAdjacentHTML('beforeend', createCountryList(response));
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

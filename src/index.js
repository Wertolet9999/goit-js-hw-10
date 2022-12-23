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

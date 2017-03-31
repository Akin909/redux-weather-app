import axios from 'axios';


const apikey = '42d207f53e69cf00735dc017f645e0d0';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Action creator
 *
 * @param {string} city the city query
 * @returns {an object} the action object
 */
export function fetchWeather(city,countryCode) {
  const url = `${rootUrl}&q=${city},${countryCode}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

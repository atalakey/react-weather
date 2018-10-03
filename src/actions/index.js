import axios from 'axios';

const API_KEY = '';

export const FETHC_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (cityName, countryCode = 'us') => {
  const request = axios({
    method: 'get',
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
    params: {
      q: `${cityName},${countryCode}`,
      type: 'accurate',
      units: 'metric',
      appid: API_KEY
    },
    responseType: 'json'
  });

  console.log('Request:', request);

  return {
    type: FETHC_WEATHER,
    payload: request
  };
}

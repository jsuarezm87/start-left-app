import { apikey, token } from '../constants/constants';
const fetch = require('node-fetch');

export const getData = async(url) => {  
    const urlApi = `${url}?api_key=${apikey}`;    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const resp = await fetch(urlApi, options);
    return await resp.json();
}
import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY = import.meta.env.REACT_APP_RAPID_API_KEY;
const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b4b4fc7d3emsh323cbf09c6081ecp13f525jsne90bf862aabf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function fetchFromAPI(url){
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
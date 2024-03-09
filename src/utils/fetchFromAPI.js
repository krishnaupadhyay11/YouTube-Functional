import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function fetchFromAPI(url){
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
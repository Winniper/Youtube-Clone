import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd50e7e4b8fmshf19ea0689e7fb9cp197a37jsn8ff35c456bb0' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const APIdata = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
  return data;
}

export default APIdata
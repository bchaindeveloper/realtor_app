import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'dd175bcc2amsh7e82e4762a063d4p13081djsn773ad1f0e51e',
    },
  });
    
  return data;
}
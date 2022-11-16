import axios from 'axios';

export const baseUrl = 'https:bayut.p.rapidapi.com'


export const fectchAPI = async (url) => {
    const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': 'dd175bcc2amsh7e82e4762a063d4p13081djsn773ad1f0e51e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
 })
}
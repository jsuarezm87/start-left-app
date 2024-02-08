import { urlGenresList } from '../constants/constants';
import { getData } from './getData';

export const getGenresList = async() => {  
   return await getData(urlGenresList);
}
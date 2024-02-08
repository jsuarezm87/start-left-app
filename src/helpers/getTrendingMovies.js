import { urlTrendingMovie } from '../constants/constants';
import { getData } from './getData';

export const getTrendingMovies = async() => {  
   return await getData(urlTrendingMovie);
}
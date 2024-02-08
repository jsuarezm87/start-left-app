import { urlMovieRecommendation } from '../constants/constants';
import { getData } from './getData';

export const getMovieRecommendation = async(idMovie) => {  
   return await getData(`${urlMovieRecommendation}/${idMovie}/recommendations`);
}
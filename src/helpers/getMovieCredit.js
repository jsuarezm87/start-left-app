import { urlMovieCredits } from '../constants/constants';
import { getData } from './getData';

export const getMovieCredit = async(idMovie) => {  
   return await getData(`${urlMovieCredits}/${idMovie}/credits`);
}
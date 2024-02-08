import { urlMovieDetail } from '../constants/constants';
import { getData } from './getData';

export const getMovieDetail = async(idMovie) => {  
   return await getData(`${urlMovieDetail}/${idMovie}`);
}
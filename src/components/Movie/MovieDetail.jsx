import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MovieRecommendation } from './MovieRecommendation';
import { getMovieDetail } from '../../helpers/getMovieDetail';
import { getMovieCredit } from '../../helpers/getMovieCredit';
import { SpinnerEmpty } from '../spinner/SpinnerEmpty';
import { Spinner } from '../spinner/Spinner';
import { MovieDetailCard } from './MovieDetailCard';


export const MovieDetail = () => {

    const { movieId } = useParams();

    const movieDetail = useQuery(['movieDetail', movieId], () => getMovieDetail(movieId));
    const movieCredits = useQuery(['movieCredits', movieId], () => getMovieCredit(movieId));

    const director = movieCredits?.data?.crew?.filter(crew => crew.job === 'Director')
                                              .map(crew => crew.name);

    let writer =  movieCredits?.data?.crew?.filter(crew => crew.job === 'Writer')
                                           .map(crew => crew.name);

    if(writer?.length === 0) writer = movieCredits?.data?.crew?.filter(crew => crew.known_for_department === 'Writing')
                                                               .map(crew => crew.name);
    
    const cast =  movieCredits?.data?.crew?.filter(crew => crew.known_for_department === 'Acting')
                                           .map(crew => crew.name);

    if (movieCredits.isLoading) return <Spinner />;
    
    if (movieCredits.error) return <SpinnerEmpty />;

    const detailCard = {
        img : movieDetail?.data?.poster_path, 
        title: movieDetail?.data?.title, 
        release_date: movieDetail?.data?.release_date, 
        runtime: movieDetail?.data?.runtime,
        genres: movieDetail?.data?.genres,
        overview: movieDetail?.data?.overview,
        director,
        writer,
        cast
    }

    return(
      <>
         <MovieDetailCard {...detailCard} />
         <MovieRecommendation />
      </>               
     );
}

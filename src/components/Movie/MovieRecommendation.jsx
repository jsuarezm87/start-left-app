import { useParams } from 'react-router-dom';
import { MovieRecomendationDetail } from './MovieRecomendationDetail';
import { getMovieRecommendation } from '../../helpers/getMovieRecommendation';
import { useQuery } from 'react-query';
import { getGenresList } from '../../helpers/getGenresList';
import { Spinner } from '../spinner/Spinner';
import { SpinnerEmpty } from '../spinner/SpinnerEmpty';


export const MovieRecommendation = () => {

    const { movieId } = useParams();

    const movieRecommendation = useQuery(['movieRecommendation', movieId], () => getMovieRecommendation(movieId));
    const genresList = useQuery('genresList', getGenresList);

    const recommendation = movieRecommendation?.data?.results?.map(reco => {   
        const genre = genresList?.data?.genres?.filter(g => reco?.genre_ids?.includes(g.id)).map(g => g.name);

        return {
          id: reco.id,
          title: reco.original_title,
          url: `https://image.tmdb.org/t/p/w500${reco.poster_path}`,
          genre: genre?.join(', ')
        }
    
    });

    if (movieRecommendation.isLoading) return <Spinner />;
    
    if (movieRecommendation.error) return <SpinnerEmpty />;

    return (             
        <>          
            {
                recommendation.map((item, i) => (
                    <MovieRecomendationDetail
                        key={i}
                        {...item}
                    />
                ))
            }
        </>
    );
}

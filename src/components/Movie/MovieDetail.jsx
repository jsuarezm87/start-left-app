import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MovieRecommendation } from './MovieRecommendation';
import { getMovieDetail } from '../../helpers/getMovieDetail';
import { getMovieCredit } from '../../helpers/getMovieCredit';
import { SpinnerEmpty } from '../spinner/SpinnerEmpty';
import { Spinner } from '../spinner/Spinner';
import { Fragment } from 'react';
import Ovalado from './Ovalado';


export const MovieDetail = () => {

    const { movieId } = useParams();

    const movieDetail = useQuery(['movieDetail', movieId], () => getMovieDetail(movieId));
    const movieCredits = useQuery(['movieCredits', movieId], () => getMovieCredit(movieId));

    const director = movieCredits?.data?.crew?.filter(crew => crew.job === 'Director')
                                              .map(crew => crew.name);

    let writer =  movieCredits?.data?.crew?.filter(crew => crew.job === 'Writer').map(crew => crew.name);

    if(writer?.length === 0) writer = movieCredits?.data?.crew?.filter(crew => crew.known_for_department === 'Writing').map(crew => crew.name);


    const cast =  movieCredits?.data?.crew?.filter(crew => crew.known_for_department === 'Acting')
                                           .map(crew => crew.name);


    if (movieCredits.isLoading) {
        return <Spinner />;
    }
    
    if (movieCredits.error) {
        return <SpinnerEmpty />;
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <h2 className="text-center">Movie App</h2>
                    <hr />
                    <div className="card mb-4 d-flex align-items-center">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movieDetail?.data?.poster_path}`} 
                            className="card-img-top" 
                            alt={movieDetail?.data?.title}  
                            style={{ maxWidth: '90%', height: 'auto', maxHeight: '600px', marginTop: '10px' }}
                        />
                        <div className="card-body">
                            <h4 className="card-title text-center">{movieDetail?.data?.title}</h4>
                            <h6 className="card-title small text-center" style={{ fontSize: '0.7rem' }}>
                                {movieDetail?.data?.release_date} - {movieDetail?.data?.runtime}m
                            </h6>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>                               
                                {                                
                                    movieDetail?.data?.genres?.map((gen, i) => (
                                        <Fragment key={i}>
                                            <Ovalado text={gen.name} />
                                            {i < movieDetail.data.genres.length - 1 && <span style={{ marginRight: '3px' }}></span>}
                                        </Fragment>
                                    
                                    ))
                                }
                            </div>
                            <br />
                                <p>{movieDetail?.data?.overview}</p>   
                                <br />
                                <p>Director: {director.join(', ')}</p> 
                                <p>Writer: {writer.join(', ')}</p> 
                                <p>Cast: {cast.join(', ')}</p> 
                        </div>
                    </div>
                    <div className="card bg-dark text-white">
                        <h5 className="card-title text-center">Recommendatios</h5>
                    </div>           
                </div>               
            </div>
            <MovieRecommendation />
      </div>                
     );
}

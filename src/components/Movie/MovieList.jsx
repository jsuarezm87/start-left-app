import { MovieCard } from './MovieCard';
import { getTrendingMovies } from '../../helpers/getTrendingMovies';
import { useQuery } from 'react-query';
import { getGenresList } from '../../helpers/getGenresList';
import { SpinnerEmpty } from '../spinner/SpinnerEmpty';
import { Spinner } from '../spinner/Spinner';


export const MovieList = () => {

  const movies = useQuery('movies', getTrendingMovies, {
    select: (data) => {
      return data?.results?.slice().sort((a, b) => b.popularity - a.popularity);
    }
  });

  const genresList = useQuery('genresList', getGenresList);

  const movieList = movies?.data?.map(movie => {

    const genre = genresList?.data?.genres.filter(g => movie.genre_ids.includes(g.id))
                                          .map(g => g.name)
                                          .slice(0,1);
    return {
      id: movie.id,
      title: movie.original_title,
      url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      genre
    }

  });

  const moviesTop = movieList?.slice(0, 5);
  const moreMovies = movieList?.slice(5);


  if (movies.isLoading) {
    return <Spinner />;
  }

  if (movies.error) {
    return <SpinnerEmpty />;
  }

  return (
    <>
      <h1 className="text-center">Movie App</h1>
      <hr />
      <div className="row rows-cols-1 row-cols-md-5 g-3 animate__animated animate__fadeIn">
        {         
          moviesTop?.map((movie, i) => (
            <MovieCard
              key={i}
              {...movie}
            />
          ))
        }
      </div>
      <br />
      <h1 className="text-center">More Like This</h1>
      <hr />      
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
          {         
            moreMovies?.map((movie, i) => (
              <MovieCard
                key={i}
                {...movie}
              />
            ))
          }
        </div>
    </>
  );
}

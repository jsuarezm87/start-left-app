import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

export const MovieCard = ({id, title, url, genre}) => {

  return (
    <div className="container-fluid mt-3 p-4 bg-light">
      <div className="card-columns h-100 d-flex flex-column">
        <div className="card hover-card h-100" >

          <Link to={`/movie/${id}`}>
            <img src={url} className="card-img-top h-100" alt={title}  />
          </Link>

          <div className="col-12">
            <div className="card-body">
              <h6 className="card-title small" style={{ fontSize: '0.6rem' }}>{genre}</h6>
              <h3 className="card-title small">{title}</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
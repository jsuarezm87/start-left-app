import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieRecomendationDetail = ({ id, title, genre, url }) => {
    return(
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card hover-card mb-4 d-flex align-items-center">
                <Link to={`/movie/${id}`}>
                    <img 
                        src={url} 
                        className="card-img-top" 
                        alt={title}  
                        style={{ maxWidth: '90%', height: 'auto', maxHeight: '500px', marginTop: '10px' }}
                    />
                 </Link>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted text-center">{genre}</h6>
                    <h5 className="card-title text-center">{title}</h5>
                </div>
                </div>           
            </div>
            </div>
      </div>                
     );
   
};

MovieRecomendationDetail.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
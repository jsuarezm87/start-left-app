import { Fragment } from 'react';
import Ovalado from './Ovalado';

export const MovieDetailCard = ({
    img, 
    title, 
    release_date, 
    runtime,
    genres,
    overview,
    director,
    writer,
    cast
}) => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <h2 className="text-center">Movie App</h2>
                    <hr />
                    <div className="card mb-4 d-flex align-items-center">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${img}`} 
                            className="card-img-top" 
                            alt={title}  
                            style={{ maxWidth: '90%', height: 'auto', maxHeight: '600px', marginTop: '10px' }}
                        />
                        <div className="card-body">
                            <h4 className="card-title text-center">{title}</h4>
                            <h6 className="card-title small text-center" style={{ fontSize: '0.7rem' }}>
                                {release_date} - {runtime}m
                            </h6>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>                               
                                {                                
                                    genres?.map((gen, i) => (
                                        <Fragment key={i}>
                                            <Ovalado text={gen.name} />
                                            {i < genres.length - 1 && <span style={{ marginRight: '3px' }}></span>}
                                        </Fragment>
                                    
                                    ))
                                }
                            </div>
                            <br />
                                <p>{overview}</p>   
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
      </div>                
     );
}

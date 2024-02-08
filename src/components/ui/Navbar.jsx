import { Link } from 'react-router-dom';

export const Navbar = () => {   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            <Link to="/" className="navbar-brand" >
                Start Left Movie - Go to Home
            </Link>          
        </nav>
    )
}
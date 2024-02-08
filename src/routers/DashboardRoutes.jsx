import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MovieScreen } from '../components/Movie/MovieScreen';
import { MovieDetail } from '../components/Movie/MovieDetail';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="movie/:movieId" element={<MovieDetail />} />
          <Route path="/*" element={<MovieScreen />} />
        </Routes>
      </div>
    </>
  );
};

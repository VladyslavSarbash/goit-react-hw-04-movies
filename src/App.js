import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from './Page/Navigation';

const HomePage = lazy(() =>
  import('./Page/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Page/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetails = lazy(() =>
  import('./Page/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NotFound = lazy(() =>
  import('./components/NotFound/NotFound' /* webpackChunkName: "NotFound" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>ЗАГРУЗКА...</h1>}>
        {/*Если навигацию переместить на уровень выше, то ломается код(в Suspence не видит fallback)*/}
        <Switch>
          <Route exact path={`/`} component={HomePage} />
          <Route path={`/movies/:movieId`} component={MovieDetails} />
          <Route path={`/movies`} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

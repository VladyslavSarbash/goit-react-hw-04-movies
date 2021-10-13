import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FetchMoviesCast } from '../Api/Api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMoviesCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map(i => {
          return (
            <li key={i.id}>
              {i.profile_path ? (
                <img src={`${IMAGE_URL}${i.profile_path}`} alt={i.name} />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  alt="Not found"
                  width={200}
                />
              )}
              <p>{i.name}</p>
              <p>{i.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}

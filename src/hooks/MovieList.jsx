import  { useState } from 'react';
import Movie from '../components/Movie';

const MovieList = ({ movies }) => {
  const [likeState, setLikeState] = useState({});
  const [saveState, setSaveState] = useState({});
  const [infoState, setInfoState] = useState({});

  const toggleLike = (itemId) => {
    setLikeState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const toggleInfo = (itemId) => {
    setInfoState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div>
      {movies.map((item) => (
        <Movie
          key={item.id}
          item={item}
          like={likeState[item.id] || false}
          save={saveState[item.id] || false}
          showInfo={infoState[item.id] || false}
          toggleLike={() => toggleLike(item.id)}
          toggleInfo={() => toggleInfo(item.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
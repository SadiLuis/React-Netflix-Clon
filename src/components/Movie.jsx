import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveMovies = async () => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please Login to save movies');
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const movieImageUrl = `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`;

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={movieImageUrl} alt={item?.title} />
    {showInfo && (
      <div className='fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50'>
        <div className='bg-white text-gray-900 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>{item?.title}</h3>
          <p className='text-sm mb-4'>{item?.overview}</p>
          <button className='bg-black text-white hover:bg-red-500 hover:text-black px-4 py-2 rounded font-semibold' onClick={toggleInfo}>
            Close
          </button>
        </div>
      </div>
    )}
    <button
      className={`absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full transition-transform duration-300 transform ${
        showInfo ? 'rotate-45' : ''
      }`}
      onClick={toggleInfo}
    >
      i
    </button>
    <div className='absolute bottom-2 left-2'>
      <button onClick={saveMovies}>
        {like ? <FaHeart className='text-gray-300' /> : <FaRegHeart className='text-gray-300' />}
      </button>
    </div>
  </div>
  );
};

export default Movie;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Filter from './Filter';

const Row = ({ title, fetchURL, IdRow }) => {
  const [movies, setMovies] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      let filteredMovies = response.data.results;

      if (filterName) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.title.toLowerCase().includes(filterName.toLowerCase())
        );
      }

      setMovies(filteredMovies);
    });
  }, [fetchURL, filterName]);

  const sliderLeft = () => {
    var slider = document.getElementById('slider' + IdRow);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider' + IdRow);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleFilterChange = (name) => {
    setFilterName(name);
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <Filter onFilter={handleFilterChange} />
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={sliderLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div id={'slider' + IdRow} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Row;

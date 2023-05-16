import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [name, setName] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFilterClick = () => {
    
    onFilter(name);
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <div className="max-w-md w-full mx-auto p-4">
      <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Search by Name"
          className="flex-grow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          onClick={handleFilterClick}
          className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100"
        >
          Search
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Filter;
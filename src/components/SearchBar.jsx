import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Notes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border border-gray-400 rounded-md p-3 w-full mb-4"
    />
  );
};

export default SearchBar;
import React, { useId } from 'react';

const SearchBox = ({ searchContact }) => {
  const id = useId();

  return (
    <div className="search">
      <label htmlFor={id}>Find contacts by name</label>
      <input
        id={id}
        type="text"
        placeholder="Search..."
        onInput={searchContact}
      />
    </div>
  );
};

export default SearchBox;

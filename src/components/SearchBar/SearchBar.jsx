import { useState } from "react";

export default function SearchBar({ onSearchValue }) {
  const [value, setValue] = useState("");
  const handleClickSearch = (e) => {
    e.preventDefault();
    onSearchValue(value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleClickSearch}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}

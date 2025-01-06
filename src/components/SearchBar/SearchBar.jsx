import { useState } from "react";
import s from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";

export default function SearchBar({ onSearchValue }) {
  const [value, setValue] = useState("");
  const handleClickSearch = (e) => {
    e.preventDefault();
    if (!value.trim("")) {
      toast("Please enter your prompt");

      return;
    }
    onSearchValue(value);
  };
  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleClickSearch}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            className={s.input}
          />

          <button className={s.btnImg} type="submit">
            Search
          </button>
        </form>
        <ToastContainer />
      </header>
    </>
  );
}

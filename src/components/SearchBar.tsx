import React, { ChangeEventHandler, Dispatch, FC, SetStateAction, useState } from "react";
import { TextField } from "@mui/material";

interface iSearchBar {
  setCityName: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<iSearchBar> = ({ setCityName }) => {
  const [search, setSearch] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCityName(search);
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search city name here"
        variant="outlined"
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;

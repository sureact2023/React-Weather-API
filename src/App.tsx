import React, { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api";
import SearchBar from "./components/SearchBar";
import { Typography } from "@mui/material";
import Result from "./components/Result";

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [data, setData] = useState<any>({})
  console.log(data)

  useEffect(() => {
    if (cityName === "") return;
    else {
      const x = async () => {
        await api.get(`?q=${cityName}`).then((res) => setData(res?.data));
      };
      x();
    }
  }, [cityName]);

  return (
    <div className="App">
      <SearchBar setCityName={setCityName} />
      {Object.keys(data).length !==0 && (
        <>
         <Typography textAlign='center'>{data?.name}, {data?.sys?.country}</Typography>
         <Result data={data}/>
        </>
      )}
     

    </div>
  );
}

export default App;

import "./App.css";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState({});

  const updateSearchData = (searchParams) => {
    setSearchData(searchParams);
  };

  return (
    <div className="App">
      <p>My First App</p>
      <SearchBar callback={updateSearchData} />
      <p>Name:{searchData["name"]}</p>
      <p>Brand:{searchData["brand"]}</p>
      <p>Type:{searchData["type"]}</p>
      <p>Price:{searchData["price"]}</p>
    </div>
  );
}

export default App;

import "./App.css";
import SearchBar from "./Components/SearchBar";
import Additem from "./Components/AddItem";
import { useState } from "react";
import ItemDisplay from "./Components/ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setItems] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    const filteredData = [];

    console.log("data");
    console.log(data);

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  const addItem = (item) => {
    let items = data["items"];

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOption)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setItems({ items: items });
      });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <h1>My First App</h1>
      </div>
      <div className="row mt-3">
        <ItemDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParms={updateFilters} />
      </div>
      <div className="row mt-3">
        <Additem addItem={addItem} />
      </div>
    </div>
  );
}

export default App;

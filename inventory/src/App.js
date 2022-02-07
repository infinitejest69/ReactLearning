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
      console.log("item");
      console.log(item);
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
    console.log("filteredData");
    console.log(filteredData);
    return filteredData;
  };

  const addItem = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setItems({ items: items });
    console.log(data);
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

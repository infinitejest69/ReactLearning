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
        <ItemDisplay items={data["items"]} />
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

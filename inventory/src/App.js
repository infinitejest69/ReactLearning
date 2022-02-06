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
    <div className="App">
      <p>My First App</p>
      <SearchBar updateSearchParms={updateFilters} />
      <ItemDisplay items={data["items"]} />
      <Additem addItem={addItem} />
    </div>
  );
}

export default App;

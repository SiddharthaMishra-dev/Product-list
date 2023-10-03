import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchItems = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.products);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <h1>Our Products</h1>
      <ItemList items={items} isLoading={isLoading} />
    </>
  );
}

export default App;

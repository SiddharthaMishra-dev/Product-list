import ItemCard from "./ItemCard";
import ClipLoader from "react-spinners/ClipLoader";

const ItemList = ({ items, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <ClipLoader loading={isLoading} size={150} color="red" />
      ) : (
        <div>
          {items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;

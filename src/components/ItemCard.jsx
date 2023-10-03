import user from "../assets/fallback-user.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemCard = ({ item }) => {
  const handleImageError = (e) => {
    e.target.src = user;
  };
  return (
    <div className="card">
      <img
        src={item.thumbnail || <Skeleton />}
        alt="image"
        className="card-image"
        onError={handleImageError}
      />
      <div>
        <p>{item.description || <Skeleton />}</p>
      </div>
    </div>
  );
};

export default ItemCard;

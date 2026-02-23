import "../CustomerStyle/ProductCard.css";

const ProductCard = ({ image, name, price, farmer, village }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h4>{name}</h4>
      <p className="price">₹ {price} / kg</p>

      <p>Farmer: {farmer}</p>
      <p>Village: {village}</p>

      <button>🛒 Direct Buy</button>
    </div>
  );
};

export default ProductCard;
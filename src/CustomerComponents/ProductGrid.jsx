import ProductCard from "./ProductCard";
import "../CustomerStyle/ProductGrid.css";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <ProductCard
        image="https://i.imgur.com/WbQZ8xC.jpg"
        name="बाजरा"
        price="120"
        farmer="रमेश"
        village="जयपुर"
      />

      <ProductCard
        image="https://i.imgur.com/jA6Q9JG.jpg"
        name="ज्वार"
        price="90"
        farmer="सुनील"
        village="कोटा"
      />

      <ProductCard
        image="https://i.imgur.com/TaF9vZy.jpg"
        name="रागी"
        price="110"
        farmer="सुरेश"
        village="उदयपुर"
      />

      <ProductCard
        image="https://i.imgur.com/sv0JQ5N.jpg"
        name="कोदो"
        price="100"
        farmer="भेरु"
        village="नीमच"
      />
    </div>
  );
};

export default ProductGrid;
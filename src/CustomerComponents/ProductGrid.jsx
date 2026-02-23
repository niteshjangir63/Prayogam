import ProductCard from "./ProductCard";
import "../CustomerStyle/ProductGrid.css";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <ProductCard
        image="https://images.herzindagi.info/image/2021/Feb/bajra-m_g.jpg"
        name="Bajra"
        price="120"
        farmer="Ramesh"
        village="Jaipur"
      />

      <ProductCard
        image="https://tse1.mm.bing.net/th/id/OIP.JANbIWUtEL-TaJ8Myh_RHQHaFj?pid=Api&h=220&P=0"
        name="Jawar"
        price="90"
        farmer="Sunil"
        village="Kota"
      />

      <ProductCard
        image="https://tse4.mm.bing.net/th/id/OIP.d6e0hBq2p0Sm45zaQDNEoAHaEK?pid=Api&h=220&P=0"
        name="Raagi"
        price="110"
        farmer="Suresh"
        village="Udaipur"
      />

      <ProductCard
        image="https://tse4.mm.bing.net/th/id/OIP.h9h3vD32w_NmTLOPzU3BzgHaE7?pid=Api&h=220&P=0"
        name="Kodo"
        price="100"
        farmer="Yudhveer"
        village="Jaipur"
      />
    </div>
  );
};

export default ProductGrid;
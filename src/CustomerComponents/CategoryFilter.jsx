import "../CustomerStyle/CategoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <h3>All Millets</h3>
      <div className="chips">
        <span>🌾 Bajra</span>
        <span>🌾 Jawar</span>
        <span>🌾 Raagi</span>
        <span>🌾 Kodo</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
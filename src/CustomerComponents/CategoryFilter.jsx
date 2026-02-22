import "../CustomerStyle/CategoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <h3>सभी मिलेट्स</h3>
      <div className="chips">
        <span>🌾 बाजरा</span>
        <span>🌾 ज्वार</span>
        <span>🌾 रागी</span>
        <span>🌾 कोदो</span>
      </div>
    </div>
  );
};

export default CategoryFilter;